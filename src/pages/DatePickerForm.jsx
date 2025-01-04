import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, FormControl, FormHelperText } from '@mui/material';
import dayjs from 'dayjs';

const DatePickerForm = () => {
  const maxDate = dayjs().subtract(18, 'year');
  return (
    <>
      <Formik
        initialValues={{ dob: '' }}
        validationSchema={Yup.object({
          dob: Yup.date()
            .required('Date is required.')
            .max(maxDate, 'You must be adult.'),
        })}
        onSubmit={(values) => {
          const date = dayjs(values.dob).format('YYYY/MM/DD').toString();
          console.log(date);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                padding: '1rem',
                gap: '1rem',
                // width: "500px",
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
              }}
            >
              <FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                      maxDate={maxDate}
                      label="Choose date"
                      views={['year', 'month', 'day']}
                      onChange={(value) => {
                        const date = dayjs(value);
                        formik.setFieldValue('dob', date);
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </FormControl>
              {formik.touched.dob && formik.errors.dob ? (
                <FormHelperText error>{formik.errors.dob}</FormHelperText>
              ) : null}

              <Button type="submit" variant="contained" color="success">
                submit
              </Button>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default DatePickerForm;
