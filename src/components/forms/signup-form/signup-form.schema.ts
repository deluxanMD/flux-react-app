import { object, ref, string } from "yup";

export const signupFormSchema = object().shape({
  firstName: string().default("").required(),
  lastName: string().default("").required(),
  email: string().default("").email().required(),
  password: string()
    .max(100)
    .matches(
      /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[<>{}"\\/|;:.,~!?@#$%^=&*\]()[_+-]).{8,}$/,
      "Password must contains atleast 1 uppercase, 1 lowercase, 1 numeric, 1 symbol and atleast 8 characters"
    )
    .required()
    .default(""),
  confirmPassword: string()
    .oneOf(
      [ref("password"), null],
      "Password and Confirm Password are not matching"
    )
    .required()
    .default(""),
  gender: string()
    .oneOf(["male", "female", "others", ""])
    .default("")
    .required(),
  occupation: string()
    .oneOf(["teacher", "software_engineer", ""])
    .default("")
    .required(),
  experience: string()
    .oneOf(["<1", "1-2", "2-4", "4>", ""])
    .default("")
    .required(),
});
