const { eruption } = require('../models');

class EruptionService {
    constructor () {
        // Create instance of Data Access layer using our desired model
        this.eruptionModel = eruption;
        
    }

    get () {
        this.eruptionModel.findAll()
        .then(result => result)
        .catch(err => err)
    }
}

module.exports = EruptionService;