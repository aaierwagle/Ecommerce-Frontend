import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Formik } from "formik";
import * as React from "react";
import { productFilterValidationSchema } from "../validationSchema/product.filter.validation.schema";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { productCategories } from "../constants/general.constants";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/slices/productSlice";

const ProductFilterDialog = () => {
  const [open, setOpen] = React.useState(false);

  const { category, minPrice, maxPrice } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Filter product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Filter</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              category: category,
              minPrice: minPrice,
              maxPrice: maxPrice,
            }}
            validationSchema={productFilterValidationSchema}
            onSubmit={(values) => {
              dispatch(setFilter(values));
            }}
          >
            {(formik) => (
              <form
                onSubmit={formik.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  padding: "1rem",
                  gap: "1rem",
                  width: "400px",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    label="Category"
                    {...formik.getFieldProps("category")}
                  >
                    {productCategories.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl>
                  <TextField
                    label="Min Price"
                    type="number"
                    {...formik.getFieldProps("minPrice")}
                  />
                  {formik.touched.minPrice && formik.errors.minPrice ? (
                    <FormHelperText error>
                      {formik.errors.minPrice}
                    </FormHelperText>
                  ) : null}
                </FormControl>

                <FormControl>
                  <TextField
                    label="Max Price"
                    type="number"
                    {...formik.getFieldProps("maxPrice")}
                  />
                  {formik.touched.maxPrice && formik.errors.maxPrice ? (
                    <FormHelperText error>
                      {formik.errors.maxPrice}
                    </FormHelperText>
                  ) : null}
                </FormControl>

                <Stack direction="row" justifyContent="flex-end" spacing={2}>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button variant="contained" color="success" type="submit">
                    Submit
                  </Button>
                </Stack>
              </form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default ProductFilterDialog;
