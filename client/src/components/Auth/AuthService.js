import axios from 'axios'

class AuthService {
    constructor() {
        let service = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
        this.service = service
    }

    signup = (username, password) => {
        return this.service.post('signup', { username, password })
            .then(response => response.data)
    }

    loggedin = () => {
        return this.service.get('/loggedin')
            .then(response => {
                console.log(response.data)
                return response.data

            })
    }

    login = (username, password) => {
        return this.service.post('/login', { username, password })
            .then(response => response.data)
    }

    logout = () => {
        return this.service.post('/logout', {})
            .then(response => response.data)
    }

    project = () => {
        return this.service.post('/theproject', {})
            .then(response => response.data)
    }

    test = () => {
        return this.service.post('/test', {})
            .then(response => response.data)
    }

    getAllConceptNames = () => {
        return this.service.get('/getAllConceptNames', {})
            .then(response => response.data)
    }

    home = () => {
        return this.service.get('/home', {})
            .then(response => response.data)
    }



}

export default AuthService