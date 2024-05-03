import { mixed, object, string } from "yup";

export const signupFormSchema = object().shape({
  firstName: string().default("").required(),
  lastName: string().default("").required(),
  email: string().default("").email().required(),
  password: string().default("").required(),
  confirmPassword: string().default("").required(),
  gender: string()
    .oneOf(["male", "female", "others", ""])
    .default("")
    .required(),
  //   occupation: mixed().oneOf(["teacher", "software_engineer"]).required(),
  //   experience: mixed().oneOf(["<1", "1-2", "2-4", "4>"]).required(),
});
