const z = require("zod");
const questionSchema = z.object({
    question : z.string().min(1, { message : "question must be required"}),
    description: z.string().min(1, "Description is required"),
    input: z.string().min(1, "Input is required"),
    output: z.string().min(1, "Output is required"),
    constraints: z.string().min(1, "Constraints are required"),
    sample_input_1: z.string().min(1, "Sample Input 1 is required"),
    sample_output_1: z.string().min(1, "Sample Output 1 is required"),
    sample_input_2: z.string().optional(),
    sample_output_2: z.string().optional()
});

const problemValidator = (req, res, next) => {
    const isValid = questionSchema.safeParse(req.body);
    if (!isValid.success) {
        return res.status(401).json({
          success : false,
          message: JSON.parse(isValid.error.message)[0],
        });
    }
    next();
}
module.exports = { problemValidator };