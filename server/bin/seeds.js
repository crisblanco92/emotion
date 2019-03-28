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
            imageURL: "",
        },
        {
            name: "system",
            figure: "figure2",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "",
        }
    ],
    [{
            name: "modern",
            figure: "figure3",
            concept: "emotional",
            center: "",
            speed: "",
            imageURL: "",
        },
        {
            name: "classic",
            figure: "figure4",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "",
        }
    ],
    [{
            name: "nomad",
            figure: "figure5",
            concept: "emotional",
            center: "",
            speed: "",
            imageURL: "",
        },
        {
            name: "ingrained",
            figure: "figure6",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "",
        }
    ],
    [{
            name: "education",
            figure: "figure7",
            concept: "emotional",
            center: "",
            speed: "",
            imageURL: "",
        },
        {
            name: "self-learning",
            figure: "figure8",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "",
        }
    ],
    [{
            name: "poetry",
            figure: "figure9",
            concept: "emotional",
            center: "",
            speed: "",
            imageURL: "",
        },
        {
            name: "prose",
            figure: "figure10",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "",
        }
    ],
    [{
            name: "to-improvise",
            figure: "figure11",
            concept: "emotional",
            center: "",
            speed: "",
            imageURL: "",
        },
        {
            name: "to-plan",
            figure: "figure12",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "",
        }
    ],
    [{
            name: "casual",
            figure: "figure13",
            concept: "emotional",
            center: "",
            speed: "",
            imageURL: "",
        },
        {
            name: "formal",
            figure: "figure14",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "",
        }
    ],
    [{
            name: "baroque",
            figure: "figure15",
            concept: "emotional",
            center: "",
            speed: "",
            imageURL: "",
        },
        {
            name: "minimalist",
            figure: "figure16",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "",
        }
    ],
    [{
            name: "theory",
            figure: "figure17",
            concept: "emotional",
            center: "",
            speed: "",
            imageURL: "",
        },
        {
            name: "practice",
            figure: "figure18",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "",
        }
    ],
    [{
            name: "rembrandt",
            figure: "figure19",
            concept: "emotional",
            center: "",
            speed: "",
            imageURL: "",
        },
        {
            name: "joan-miro",
            figure: "figure20",
            concept: "rational",
            center: "",
            speed: "",
            imageURL: "",
        }
    ]



]


mongoose.connect(process.env.MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log(`Connect to mongo ${process.env.MONGODB}`)

        figures.forEach(figuresPair => {
            // console.log('el par es', figuresPair);
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
                        .then(() => console.log('Par añadido'))

                })
                .catch(err => console.log(err))
        })



    })
    .then(() => console.log("Disconnect"))
    .catch(err => console.log(err));















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
//     .catch(err => console.log(err));