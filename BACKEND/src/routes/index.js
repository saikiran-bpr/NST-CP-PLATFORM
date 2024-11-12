const router = require("express").Router();
const authRouter = require("./auth");
const problemsRouter = require("./problems");
const coderunnerRouter = require("./runcode");
const authoriseUser = require("../middlewares/jwtVerifyUser");

router.use(authoriseUser);

router.use("/auth", authRouter);
router.use("/problems", problemsRouter);
router.use("/runcode", coderunnerRouter);

module.exports = router;