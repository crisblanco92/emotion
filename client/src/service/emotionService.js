import axios from "axios";

export default class emotionService {

    constructor() {

        this.service = axios.create({
            baseURL: "http://localhost:5000"
        })
    }

    getCoasters = () => {
        const promise = this.service.get("emotion")
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })

        return promise;
    }

    postNewCoaster = emo => {
        const promise = this.service.post("postEmotion", emo)
            .then(res => {
                console.log(res);
                return res.data;
            })

        return promise;
    }


}