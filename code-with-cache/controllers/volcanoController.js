const { volcano } = require('../models');

const { redisClient } = require('../middleware/cacheMiddleware');

module.exports = {
    getVolcanos: (req, res) => {
        volcano.findAll().then(result => {
            const data = JSON.stringify(result)
            redisClient.setex(userId, 5, data)
            return res.status(200).send({message: "Get Volcanos", result})
        }
            
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