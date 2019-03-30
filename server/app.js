require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const passport = require('passport')
const session = require("express-session")
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const cors = require("cors");

mongoose
    .connect(process.env.MONGODB, { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

const whiteList = ["http://localhost:3000"]

const corsOptions = {
    origin: (origin, cb) => {
        const originIsWhitelisted = whiteList.includes(origin);
        cb(null, originIsWhitelisted)
    },
    credentials: true
}

app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: "hola",
    resave: true,
    saveUninitialized: true
}))

require("./passport")(app);


const authRoutes = require('./routes/auth-routes')
app.use('/api', authRoutes)

const conceptRoutes = require('./routes/concept-routes')
app.use('/api', conceptRoutes)


module.exports = app