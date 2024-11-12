const ProblemService = require("../services/problemsService");

const createProblem = async (req, res, next) => {
    const question = req.body;
    try{
        const problem = await ProblemService.createProblem(question);
        return res.status(201).json({
            success : true,
            message : "Problem created sucessfully",
            problem
        });
    } catch (error) {
        if (error.code === 11000){
            error.statusCode = 409;
            error.message = "Question with this name already exists"
        }
        next(error);
    }
}

const getAllProblems = async (req, res, next) => {
    try{
        const problems = await ProblemService.getAllProblems();
        return res.status(200).json({
            success : true,
            problems
        });
    } catch(error){
        next(error);
    }
}

const getProblemById = async (req, res, next) => {
    const { id } = req.params;
    try{
        const problem = await ProblemService.getProblemById(id);
        if(!problem){
            const error = new Error('Problem not found');
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({
            success : true,
            problem
        });
    } catch(error){
        next(error);
    }
}

const updateProblem = async (req, res, next) => {
    const question = req.body;
    const problem_id = req.params.problem_id;
    try{
        const updatedProblem = await ProblemService.updateProblem(problem_id, question);
        return res.status(200).json({
            success : true,
            updatedProblem
        });
    } catch(error){
        next(error);
    }
}

const deleteProblem = async (req, res, next) => {
    const problem_id = req.params.problem_id;
    try{
        const deletedProblem = await ProblemService.deleteProblem(problem_id);
        return res.status(200).json({
            success : true,
            deletedProblem
        });
    } catch(error){
        next(error);
    }
}

module.exports = { createProblem, getAllProblems, getProblemById, updateProblem, deleteProblem };