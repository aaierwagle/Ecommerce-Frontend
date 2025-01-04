import * as Yup from "yup";
import { productCategories } from "../constants/general.constants";

export const productFilterValidationSchema = Yup.object({
  category: Yup.string().oneOf(productCategories).nullable(),
  minPrice: Yup.number().min(0, "Min price cannot be negative."),
  maxPrice: Yup.number().min(0, "Max price cannot be negative."),
});
