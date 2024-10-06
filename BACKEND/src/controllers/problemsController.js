const ProblemService = require("../services/problemsService");

const createProblem = async (req, res) => {
    const question = req.body;
    try {
        const questionExists = await ProblemService.checkProblem(question.question);
        if(questionExists){
            return res.status(409).json({
                success : false,
                message : "Question with this name already exists"
            });
        }
        const problem = await ProblemService.createProblem(question);
        return res.status(201).json({
            success : true,
            message : "Problem created sucessfully",
            problem
        });
    } catch(e){
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

const getAllProblems = async (req, res) => {
    try{
        const problems = await ProblemService.getAllProblems();
        return res.status(200).json({
            success : true,
            problems
        });
    } catch(e){
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

const getProblemById = async (req, res) => {
    const { id } = req.params;
    try{
        const problem = await ProblemService.getProblemById(id);
        return res.status(200).json({
            success : true,
            problem
        });
    } catch(e){
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

module.exports = { createProblem, getAllProblems, getProblemById };