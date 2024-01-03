import * as yup from "yup";

export const Forgotpassword = yup.object({
  email: yup.string().required("Enter your email").email("Enter a valid email"),
});