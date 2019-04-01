import axios from "axios";

export default class emotionService {

    constructor() {

        this.service = axios.create({
            baseURL: "http://localhost:5000/api",
            withCredentials: true
        })
    }


        return promise;
    }



}