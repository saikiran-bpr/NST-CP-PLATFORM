const z = require("zod");
const signupSchema = z.object({
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

const signinSchema = z.object({
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

const signupValidator = (req, res, next) => {
  const isValid = signupSchema.safeParse(req.body);
  if (!isValid.success) {
    return res.status(401).json({
      success : false,
      message: JSON.parse(isValid.error.message)[0],
    });
  }
  next();
};

const signinValidator = (req, res, next) => {
  const isValid = signinSchema.safeParse(req.body);
  if (!isValid.success) {
    return res.status(401).json({
      success : false,
      message: JSON.parse(isValid.error.message)[0],
    });
  }
  next();
}

module.exports = { signupValidator, signinValidator };