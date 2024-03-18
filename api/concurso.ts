import axios from 'axios';

const Concurso = axios.create({

    baseURL:'/api',

});

export default Concurso