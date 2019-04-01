require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User");
const Concepts = require('../models/Concepts')
const Pair = require('../models/Pair')

const figures = [
    [{
            name: "object",
            figure: "figure1",
            concept: "emotional",
            center: "",
            speed: "",
            imageURL: "/forms/form-01.svg",
        },
        {
            name: "system",
            figure: "figure2",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "/forms/form-02.svg",
        }
    ],
    [{
            name: "classic",
            figure: "figure3",
            concept: "emotional",
            center: "",
            speed: "",
            imageURL: "/forms/form-03.svg",
        },
        {
            name: "modern",
            figure: "figure4",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "/forms/form-04.svg",
        }
    ],
    [{
            name: "nomad",
            figure: "figure5",
            concept: "emotional",
            center: "",
            speed: "",
            imageURL: "/forms/form-05.svg",
        },
        {
            name: "ingrained",
            figure: "figure6",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "/forms/form-06.svg",
        }
    ],
    [{
            name: "self-leaning",
            figure: "figure7",
            concept: "emotional",
            center: "",
            speed: "",
            imageURL: "/forms/form-07.svg",
        },
        {
            name: "education",
            figure: "figure8",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "/forms/form-08.svg",
        }
    ],
    [{
            name: "poetry",
            figure: "figure9",
            concept: "emotional",
            center: "",
            speed: "",
            imageURL: "/forms/form-09.svg",
        },
        {
            name: "prose",
            figure: "figure10",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "/forms/form-10.svg",
        }
    ],
    [{
            name: "joan miró",
            figure: "figure11",
            concept: "emotional",
            center: "",
            speed: "",
            imageURL: "/forms/form-11.svg",
        },
        {
            name: "rembrandt",
            figure: "figure12",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "/forms/form-12.svg",
        }
    ],
    [{
            name: "to-improvise",
            figure: "figure13",
            concept: "emotional",
            center: "",
            speed: "",
            imageURL: "/forms/form-13.svg",
        },
        {
            name: "to-plan",
            figure: "figure14",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "/forms/form-14.svg",
        }
    ],
    [{
            name: "formal",
            figure: "figure15",
            concept: "emotional",
            center: "",
            speed: "",
            imageURL: "/forms/form-15.svg",
        },
        {
            name: "casual",
            figure: "figure16",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "/forms/form-16.svg",
        }
    ],
    [{
            name: "baroque",
            figure: "figure17",
            concept: "emotional",
            center: "",
            speed: "",
            imageURL: "/forms/form-17.svg",
        },
        {
            name: "minimalist",
            figure: "figure18",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "/forms/form-18.svg",
        }
    ],
    [{
            name: "practice",
            figure: "figure19",
            concept: "emotional",
            center: "",
            speed: "",
            imageURL: "/forms/form-19.svg",
        },
        {
            name: "theory",
            figure: "figure20",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "/forms/form-20.svg",
        }
    ]



]

mongoose.connect('mongodb://localhost/emotion', { useNewUrlParser: true })
    .then(() => {
        console.log(`Connect to mongo mongodb://localhost/emotion`)

        figures.forEach(figuresPair => {
            Concepts.insertMany(figuresPair)
                .then(insertedObjs => {
                    console.log('figuras añadidas', insertedObjs[0]._id, insertedObjs[1]._id);
                    const pair = {
                        pairOfConcepts: {
                            concept1: insertedObjs[0]._id,
                            concept2: insertedObjs[1]._id
                        }
                    }
                    Pair.create(pair)
                        .then(() => console.log('par añadido'))

                })
                .catch(err => console.log(err))
        })
    })
    .then(() => console.log("Disconnect"))
    .catch(err => console.log(err))
















// mongoose.connect(process.env.MONGODB, { useNewUrlParser: true })
//     .then(() => {
//         console.log(`Connect to mongo ${process.env.MONGODB}`)
//         return User.deleteMany();
//     })
//     .then(() => User.insertMany(figures))
//     .then((figures) => {
//         console.log(`User save ${figures}`)
//         return mongoose.connection.close()
//     })
//     .then(() => console.log("Disconnect"))
//     .catch(err => console.log(err));/