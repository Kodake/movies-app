import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '9c637acebb780a012294e8d8f027de2d',
        language: 'es-ES'
    }
});

export default movieDB;