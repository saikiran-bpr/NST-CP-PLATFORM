const router = require("express").Router();
const userValidator = require("../../middlewares/users");
const createUser = require("../../controllers/users");

router.post(userValidator, createUser);

module.exports = router;