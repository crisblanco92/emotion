import axios from 'axios'

class AuthService {
    constructor() {
        let service = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }

        })
        this.service = service
    }

    signup = (username, password, age, location, email) => {
        console.log('la edad es :', age)
        console.log('la location es :', location)

        console.log('la email es :', email)

        return this.service.post('signup', { username, password, email, age, location })
            .then(response => {
                console.log('no hay petes en service')
                return response.data
            })
            .catch(err => console.log('si hay petes en service', err))
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

    postAnswers = (arr, emotionalCounter, rationalCounter) => {
        console.log('estoy en el servicio y he recibido esto', arr)
        return this.service.post('/postAnswers', { arr, emotionalCounter, rationalCounter })
            .then(response => response.data)
    }


    share = () => {
        return this.service.post('/share', {})
            .then(response => response.data)
    }

    getFormsUsers = () => {
        return this.service.post('/getAllForms')
            .then(response => response.data)
    }
}

export default AuthService