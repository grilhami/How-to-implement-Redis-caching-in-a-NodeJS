const { volcano } = require('../models');


module.exports = {
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
        ).catch(err => res.status(200).send({message: "Server Error", error: err.message}))
    }
};