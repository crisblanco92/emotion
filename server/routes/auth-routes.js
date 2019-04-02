const express = require('express')
const authRoutes = express.Router()

const passport = require('passport')
const bcrypt = require('bcrypt')

const User = require('../models/User')

authRoutes.post('/signup', (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    const age = req.body.age
    const email = req.body.email
    const location = req.body.location

    console.log(username, password)
    if (!username || !password) {
        res.status(400).json({ message: 'Provide username and password' })
        return
    }

    if (password.length < 7) {
        res.status(400).json({ message: 'Please make your password at least 8 characters long for security purposes.' })
        return
    }

    User.findOne({ username }, (err, foundUser) => {
        if (err) {
            res.status(500).json({ message: "Username check went bad." })
            return
        }

        if (foundUser) {
            res.status(400).json({ message: 'Username taken. Choose another one.' })
            return
        }

        const salt = bcrypt.genSaltSync(10)
        const hashPass = bcrypt.hashSync(password, salt)

        const aNewUser = new User({
            username: username,
            password: hashPass,
            age: age,
            email: email,
            location: location

        })

        aNewUser.save(err => {
            if (err) {
                console.log('SI HAY PETES', err)
                res.status(400).json({ message: 'Saving user to database went wrong.' })
                return
            }
            console.log('NO HAY PETES')
            res.status(200).json({ message: 'Guay' })
            return;

            // req.login(aNewUser, (err) => {

            //     if (err) {
            //         res.status(500).json({ message: 'Login after signup went bad.' })
            //         return
            //     }

            //     res.status(200).json(aNewUser)
            // })
        })
    })



})

authRoutes.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
        if (err) {
            res.status(500).json({ message: 'Something went wrong authenticating user' });
            return;
        }

        if (!theUser) {
            res.status(401).json(failureDetails);
            return;
        }

        req.login(theUser, (err) => {
            if (err) {
                res.status(500).json({ message: 'Session save went bad.' })
                return
            }

            res.status(200).json(theUser)
        })
    })(req, res, next)
})

authRoutes.post('/logout', (req, res, next) => {
    req.logout()
    res.status(200).json({ message: 'Log out success!' })
})


authRoutes.get('/loggedin', (req, res, next) => {
    console.log('dentro de la ruta')
    if (req.isAuthenticated()) {
        res.status(200).json(req.user)
        return
    }
    res.status(403).json({ message: 'Unauthorized' })
})

module.exports = authRoutes