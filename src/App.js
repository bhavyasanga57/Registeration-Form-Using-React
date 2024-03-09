
import React, { useState } from "react";
import { countriesValues } from "./Mock";
import { options } from "./Mock";
import { useRef } from "react";
import {
  TextField,
  FormControl,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Select,
  MenuItem,
  FormGroup,
  FormLabel,
  InputLabel,

} from "@mui/material";
export default function App() {
  const intialValue={
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    country: "",
    emailError: false,
    gender: "",
    dob: "",
    skills: [],
    address: "",
    experience: "",
    profileImage: "",
    
  }
  
  
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    country: "",
    emailError: false,
    gender: "",
    dob: "",
    skills: [],
    address: "",
    experience: "",
    profileImage: "",
  });
  const fileInputRef = useRef(null);
  const handleMobileNoChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setRegisterForm({ ...registerForm, mobileNo: value });
  };

  const handleExpriencee = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 2);
    setRegisterForm({ ...registerForm, experience: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setRegisterForm({
      ...registerForm,
      profileImage: URL.createObjectURL(file),
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(registerForm);
    alert("data save successfully");
    fileInputRef.current.value=null
    setRegisterForm(intialValue);
    
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <TextField
          label="First Name"
          onChange={handleChange}
          required
          name="firstName"
          variant="outlined"
          color="secondary"
          type="firstName"
          sx={{ mb: 3 }}
          fullWidth
          value={registerForm.firstName}
          error={registerForm.firstName}
        />
        <TextField
          label="Last Name"
          onChange={handleChange}
          required
          name="lastName"
          variant="outlined"
          color="secondary"
          type="lastName"
          sx={{ mb: 3 }}
          fullWidth
          value={registerForm.lastName}
          error={registerForm.lastName}
        />
        <TextField
          label="email"
          onChange={handleChange}
          required
          name="email"
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          value={registerForm.email}
          error={registerForm.emailError}
        />
        <TextField
          label="Mobile  No"
          onChange={handleMobileNoChange}
          required
          variant="outlined"
          color="secondary"
          sx={{ mb: 3 }}
          fullWidth
          name="mobileNo"
          value={registerForm.mobileNo}
          error={registerForm.mobileNo}
        />

        <Select
          required
          name="country"
          variant="outlined"
          color="secondary"
          value={registerForm.country}
          onChange={handleChange}
          displayEmpty={true}
          sx={{ mb: 3 }}
          fullWidth
        >
          <MenuItem value="">Select</MenuItem>
          {countriesValues.map((countriesvalue) => {
            return (
              <MenuItem key={countriesvalue.value} value={countriesvalue.value}>
                {countriesvalue.lablel}
              </MenuItem>
            );
          })}
        </Select>

        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            value={registerForm.gender}
            onChange={handleChange}
            row
            required
            name="gender"
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <br />
        <TextField
          label="Date of Birth"
          type="date"
          name="dob"
          value={registerForm.dob}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ mb: 3 }}
          fullWidth
          required
        />
        <TextField
          label="Address"
          multiline
          name="address"
          value={registerForm.address}
          onChange={handleChange}
          required
          sx={{ mb: 3 }}
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel>Skill</InputLabel>
          <Select
            name="skills"
            value={registerForm.skills}
            multiple
            displayEmpty={true}
            onChange={handleChange}
            fullWidth
            required
          >
            {options.map((option) => {
              return <MenuItem value={option.value}>{option.lablel}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <br />
        <TextField
          label="Experience"
          onChange={handleExpriencee}
          required
          variant="outlined"
          color="secondary"
          type="experience"
          sx={{ mb: 3 }}
          fullWidth
          name="experience"
          value={registerForm.experience}
          error={registerForm.experience}
        />
        <input
          type="file"
          accept="image/*"
          name="profileImage"
          onChange={handleImageUpload}
          ref={fileInputRef}
          required
        />

        {registerForm.profileImage && (
          <img
            src={registerForm.profileImage}
            alt="Profile"
            style={{ width: 50, Height: 50 }}
          />
        )}
        <Button variant="outlined" color="secondary" type="submit">
          Register
        </Button>
      </form>
    </React.Fragment>
  );
}
