import api from "../config/api";

export const login = (data) => {
    return api.post('/auth/login', data);
}
