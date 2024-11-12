const router = require("express").Router();
const { runCode, getSubmission } = require("../../controllers/coderunnerController");

router.post("/", runCode);
router.get("/:token", getSubmission);

module.exports = router;