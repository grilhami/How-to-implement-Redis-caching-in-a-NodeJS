const { eruption } = require('../models');

class EruptionService {
    constructor () {
        // Create instance of Data Access layer using our desired model
        this.eruptionModel = eruption;
    }

    get () {
        this.eruptionModel.findAll().then(result => 
            res.status(200).send({message: "Get Erruptions", result})
        ).catch(err => 
            res.status(500).send({message: "Server Error", error: err.message})
        )
    }
}