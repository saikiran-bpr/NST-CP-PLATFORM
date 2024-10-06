const jwt = require("jsonwebtoken");

const authoriseUser = async (req, res, next) => {
    const isAuth = req.url.split("/")[1] === "auth";
    if(isAuth)
        return next();
    const authorizationToken  = req.headers.authorization;
    try{
        jwt.verify(authorizationToken, process.env.JWT_SECRET_PASSWORD);
        next();
    } catch(e){
        return res.status(401).json({
            success : false,
            message : "Unauthorised"
        });
    }
}

module.exports = authoriseUser;