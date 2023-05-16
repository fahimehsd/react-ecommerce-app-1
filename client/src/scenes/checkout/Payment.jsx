import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
    return (
        <Box m="30px 0">
          {/* CONTACT INFO */}
          <Box>
            <Typography sx={{ mb: "15px" }} fontSize="18px">
              Contact Info
            </Typography>
            <TextField
              fullWidth
              type="text"
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4", marginBottom: "15px" }}
            />
            <TextField
              fullWidth
              type="text"
              label="Phone Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phoneNumber}
              name="phoneNumber"
              error={!!touched.phoneNumber && !!errors.phoneNumber}
              helperText={touched.phoneNumber && errors.phoneNumber}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>
        </Box>
      );
};

export default Payment;
