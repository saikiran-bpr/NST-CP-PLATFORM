const router = require("express").Router();
const authRouter = require("./auth");
const problemsRouter = require("./problems");
const authoriseUser = require("../middlewares/jwtVerifyUser");

router.use(authoriseUser);

router.use("/auth", authRouter);
router.use("/problems", problemsRouter);

module.exports = router;