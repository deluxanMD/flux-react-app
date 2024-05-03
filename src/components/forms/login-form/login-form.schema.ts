import { bool, object, string } from "yup";

export const loginFormSchema = object().shape({
  username: string().default("").email().required(),
  password: string().default("").required(),
  remember: bool().default(false),
});
