export const parseJson = (json) => {
    try {
        return JSON.parse(json);
    } catch (error) {
        return json;
    }
};

export const stringifyJson = (json) => JSON.stringify(json);