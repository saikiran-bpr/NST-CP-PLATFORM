const User = require("../../models/Users");

const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await new User({
            username,
            email,
            password
        });
    } catch(e){
        res.status(401).json({
            message : "User with this already exists"
        });
    }
}

module.exports = { createUser };