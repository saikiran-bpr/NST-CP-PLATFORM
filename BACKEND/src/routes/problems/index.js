const router = require("express").Router();
const { problemValidator } = require("../../middlewares/validators/problemValidator");
const { createProblem, getAllProblems, getProblemById, updateProblem, deleteProblem } = require("../../controllers/problemsController");

router.post("/create", problemValidator, createProblem);
router.put("/update/:problem_id", problemValidator, updateProblem);
router.delete("/delete/:problem_id", deleteProblem);
router.get("/", getAllProblems);
router.get("/:id", getProblemById);

module.exports = router;