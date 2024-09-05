import * as yup from "yup";

export const schema = yup.object({
  title: yup.string().required(),
  image: yup.string().required(),
  body: yup.string().required(),
  tags: yup
    .array()
    .of(yup.string().matches(/^\S+$/, "Tags should not contain spaces"))
    .max(5, "You can add up to 5 tags")
    .notRequired(),
});
