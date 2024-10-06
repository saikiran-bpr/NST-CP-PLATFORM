const Problem = require("../models/problems.model");

class ProblemService {
    async createProblem(problem){
        const response = await Problem.create(problem);
        return response;
    }
    async checkProblem(questionName){
        return await Problem.findOne({
            question : questionName
        });
    }
    async getProblemById(problemId){
        return await Problem.findById(problemId);
    }
    async getAllProblems(){
        return await Problem.find({});
    }
}

module.exports = new ProblemService();

