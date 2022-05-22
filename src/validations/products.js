import * as yup from "yup";

export const productSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  brand: yup.string().required("Brand is required"),
  category: yup.string().required("Category is required"),
  colors: yup
    .array()
    .required("Must have Color(s)") // these constraints are shown if and only if inner constraints are satisfied
    .min(1, "Minimum of 1 shoe color"),

  sizes: yup
    .array().of(yup.string().matches(/^[0-9]+$/gi, "Size must be a number"))
    .required("Must have Size(s)")
    .min(1, "Minimum of 1 shoe size"),
  price: yup
    .string()
    .required("Price is required")
    .matches(/^[0-9]+$/gi, "Price must be a number"),
  stocks: yup
    .number()
    .required("Stocks is required")
    .typeError("Stocks must be a number")
    .integer(),
});
