
const authService = require("../services/authService");

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await authService.signupUser({ username, email, password });

        res.status(200).json({
            success: true,
            message: "User created successfully",
            username: user.username,
            email: user.email,
        });
    } catch (error) {
        if (error.code === 11000) {
            const key = Object.keys(error.keyValue)[0];
            return res.status(401).json({
                success: false,
                message: `User with this ${key} already exists`,
            });
        }
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await authService.signinUser({ email, password });
        return res.status(200).json({
            success: true,
            token,
        });
    } catch (error) {
        if (error.message === "UserNotFound") {
            return res.status(401).json({
                success: false,
                message: "User with this email does not exist",
            });
        }
        if (error.message === "InvalidPassword") {
            return res.status(401).json({
                success: false,
                message: "Wrong password",
            });
        }
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = { signup, signin };
