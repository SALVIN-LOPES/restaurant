import axios from 'axios';

const url = 'http://localhost:5000';

export const signup = (data) => axios.post(`${url}/user/signup`,data);
export const signin = (data) => axios.post(`${url}/user/signin`,data);