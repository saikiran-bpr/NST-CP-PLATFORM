const router = require("express").Router();
const { signupValidator, signinValidator } = require("../../middlewares/validators/authInputValidator");
const { signup, signin } = require("../../controllers/authController");

router.post("/signup", signupValidator, signup);

router.post("/signin", signinValidator, signin);

module.exports = router;