const router = require("express").Router();
const { problemValidator } = require("../../middlewares/validators/problemValidator");
const { createProblem, getAllProblems, getProblemById } = require("../../controllers/problemsController");

router.post("/create", problemValidator, createProblem);

router.get("/", getAllProblems);

router.get("/:id", getProblemById);

module.exports = router;