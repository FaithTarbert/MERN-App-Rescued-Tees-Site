import axios from 'axios';

//this does a get all tees fetch from mongodb
export const getTees = () => axios.get("/api/routes").then(res => res.json);
