const TOKEN = "token";

export const getToken = () => {
    const tokenString = localStorage.getItem(TOKEN);
    const token = JSON.parse(tokenString);
    return token;
};

export const setToken = token => {
    localStorage.setItem(TOKEN, JSON.stringify(token));
};

export const removeToken = () => {
    localStorage.removeItem(TOKEN);
}
