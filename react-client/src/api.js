import axios from 'axios';

//this does a get all fetch from mongodb
export const getTees = () => axios.get("http://localhost:5000/").then(res => res.json);

export const updateTee = (id) => axios.post(`/update/${id}`).then(res => res.json);
