import axios from 'axios';
import { toast } from 'react-toastify';
import { history } from "./../..";

console.log(process.env.REACT_APP_API_URL ?? process.env);

// axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "api";

axios.interceptors.response.use(undefined, (error) => {
    if (error.message === "Network Error" && !error.response) {
        toast.error("Network error - Make sure API is running!");
        throw error;
    }

    const { status, data, config, headers } = error.response;

    if (
        status === 401 &&
        headers["www-authenticate"] === 'Bearer error="invalid_token", error_description="The token is expired"'
    ) {
        console.log(error.response);
        localStorage.removeItem("jwt");
        history.push("/");
        toast.info("Your session has expired. Please login again");
    }
    if (status === 404 || (status === 400 && config.method === "get" && data.errors.hasOwnProperty("id"))) {
        toast.error("No record(s) found");
    }
    if (status === 500) {
        toast.error("Server error - check the terminal for more info!");
    }

    throw error.response;
});


const responseBody = (response) => response.data;

export const requests = {
    get: (url, config) => axios.get(url, config).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    delete: (url) => axios.delete(url).then(responseBody),
    postForm: (url, file) => {
        let formData = new FormData();
        formData.append("File", file);

        return axios
            .post(url, formData, {
                headers: { "Content-type": "multipart/data" },
            })
            .then(responseBody);
    },
};
