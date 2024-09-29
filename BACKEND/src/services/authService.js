// services/authService.js

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
require("dotenv").config();

const saltRounds = 10;

class AuthService {
    // Signup Method
    async signupUser({ username, email, password }) {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create the user in the database
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        return user;
    }

    // Signin Method
    async signinUser({ email, password }) {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("UserNotFound");
        }

        // Compare passwords
        const isAuthorized = await bcrypt.compare(password, user.password);
        if (!isAuthorized) {
            throw new Error("InvalidPassword");
        }

        // Generate JWT token
        const token = jwt.sign(
            {
                username: user.username,
                email: user.email,
            },
            process.env.JWT_SECRET_PASSWORD
        );

        return token;
    }
}

module.exports = new AuthService();
