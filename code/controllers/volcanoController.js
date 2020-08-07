const { eruption } = require('../models');


module.exports = {
    getVolcanos: (req, res) => {
        eruption.findAll().then(result => 
            res.status(200).send({message: "Erruptions", result})
        ).catch(err => 
            res.status(500).send({message: "Server Error", error: err.message})
        )
    },
    createVolcano: (req, res) => {
        const { name, shape, elevation, lastEruption} = req.body;

        volcano.create(
            {
                name,
                shape,
                elevation,
                lastEruption
            },
        ).then(result => res.status(200).send({message: "Volcano Created", result})
        ).catch(err => res.status(500).send({message: "Server Error", error: err.message}))
    }
};