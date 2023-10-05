import { requests } from "./agent";

const monsters = {
    list: (params) => requests.get("/monsters", { params }),
    details: (id) => requests.get(`/monsters/${id}`),
    create: (monster) => requests.post("/monsters", monster),
    update: (monster) => requests.put(`/monsters/${monster.id}`, monster),
    delete: (id) => requests.delete(`/monsters/${id}`)
};

const habitats = {
    list: (params) => requests.get("/habitats", { params }),
    details: (id) => requests.get(`/habitats/${id}`),
    create: (habitat) => requests.post("/habitats", habitat),
    update: (habitat) => requests.put(`/habitats/${habitat.id}`, habitat),
    delete: (id) => requests.delete(`/habitats/${id}`)
};

const lives = {
    list: (params) => requests.get("/lives", { params }),
    details: (id) => requests.get(`/lives/${id}`),
    create: (life) => requests.post("/lives", life),
    update: (life) => requests.put(`/lives/${life.id}`, life),
    delete: (id) => requests.delete(`/lives/${id}`)
};

export { monsters, habitats, lives };