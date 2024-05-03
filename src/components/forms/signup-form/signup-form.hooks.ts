import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signupFormSchema } from "./signup-form.schema";

export const useSignupForm = () => {
  return useForm({
    resolver: yupResolver(signupFormSchema),
    defaultValues: signupFormSchema.cast({}),
  });
};
