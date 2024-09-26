const z = require("zod");
const schema = z.object({
  username: z
    .string()
    .min(4, { message: " Username Must be 5 or more characters long" })
    .regex(/^[a-z0-9]+$/, {
      message: "Username should only contain lowercase letters and numbers.",
    }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long.",
    })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Password must include at least one special character.",
    }),
});

const userValidator = (req, res, next) => {
  const isValid = schema.safeParse(req.body);
  if (!isValid.success) {
    res.status(401).json({
      message: isValid.error.message[0].message,
    });
  }
  next();
};
module.exports = { userValidator };