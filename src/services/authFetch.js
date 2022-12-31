import {setToken} from "../utils/token";

export const login = async (data, callback) => {
    try {
        const response = await fetch('/auth/login', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        const responseJson = await response.json();
        const token = responseJson?.data;
        if (token) {
            setToken(token)
            callback?.();
        }
    } catch (e) {
        console.log(e)
    }
}
