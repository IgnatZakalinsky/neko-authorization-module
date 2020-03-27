import axios from "axios";

export const baseURL = 'https://neko-cafe-back.herokuapp.com/';

export const instance = axios.create({
    baseURL
});
