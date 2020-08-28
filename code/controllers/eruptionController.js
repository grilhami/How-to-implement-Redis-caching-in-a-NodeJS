const { EruptionService } = require('../services');
const EruptionServiceObj = new EruptionService();


module.exports = {
    getEruptions: (req, res) => {
        EruptionServiceObj.get().then(result => {
            return res.status(200).json({
                message: "Get All Eruptions",
                result
            })
        }).catch(err => {
            return res.status(200).json({
                message: "internal Server Error",
                error: err.message
            })
        })
    }
};