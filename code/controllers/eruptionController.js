const { eruption } = require('../models');


module.exports = {
    getEruptions: (req, res) => {
        eruption.findAll().then(result => 
            res.status(200).send({message: "Get Erruptions", result})
        ).catch(err => 
            res.status(500).send({message: "Server Error", error: err.message})
        )
    }
};