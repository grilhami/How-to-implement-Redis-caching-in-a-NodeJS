const { eruption } = require('../models');

const { redisClient } = require('../middlewares/cacheMiddleware');

module.exports = {
    getEruptions: (req, res) => {
        eruption.findAll().then(result => {
            const data = JSON.stringify(result)
            redisClient.setex("eruptions", 5, data)
            return res.status(200).send({message: "Get Eruptions", result})
        }
        ).catch(err => 
            res.status(500).send({message: "Server Error", error: err.message})
        )
    }
};