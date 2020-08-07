const redis = require("redis");

const client = redis.createClient(6379);

exports.getEruptionsCache = (req, res, next) => {
    client.get("eruptions", (err, data) =>{
        if (err) {
            next()
        };

        if (data !== null) {
            res.status(200).json({
                message: "Get Eruptions Cache",
                result: JSON.parse(data)
            });
        } else {
            next();
        }
    });
    
};

exports.redisClient = client;