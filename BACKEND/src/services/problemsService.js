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
    async updateProblem(problem_id, questionData){
        return await Problem.findOneAndUpdate(
            { _id : problem_id}, 
            { $set : questionData},
            { new: true, runValidators: true }
        );
    }
    async deleteProblem(problem_id){
        return await Problem.deleteOne({
            _id : problem_id
        });
    }
}

module.exports = new ProblemService();

