import axios from "axios";

const api = axios.create({
    baseURL: "https://611cf7e17d273a0017e2f54b.mockapi.io/todos"
});

export default api