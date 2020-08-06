const redis = require("redis");

const client = redis.createClient(6379);

exports.getVolcanoCache = (req, res, next) => {
    const { volcanoId } = req.query;

    client.get(volcanoId, (err, data) =>{
        if (err) {
            next()
        };

        if (data !== null) {
            res.status(200).json({
                message: "GET Volcanos",
                result: JSON.parse(data)
            });
        } else {
            next();
        }
    });
    
};

exports.redisClient = client;