import axios from "axios";
const AxiosInstance = axios.create({
    baseURL : "http://localhost:3000",
    headers :{
        'Content-Type' : 'application/JSON'
    }
})

export default AxiosInstance