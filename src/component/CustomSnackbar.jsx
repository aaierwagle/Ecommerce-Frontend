import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbar } from "../store/slices/snackbarSlice";

const CustomSnackbar = () => {
  const values = useSelector((state) => state.snackbar);

  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(closeSnackbar());
  };

  return (
    <div>
      <Snackbar
        open={values.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={values.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {values.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomSnackbar;
