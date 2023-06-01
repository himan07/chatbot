import React, { useEffect, useState } from "react";
import "../assets/css/LoginPage.css";
import { Button, TextField } from "@mui/material";

const CreateAccount = (props) => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  useEffect(() => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }, [email, password]);

  const handleChangeEmail = (event) => {
    let emaiValue = event.target.value;
    setEmail(emaiValue);
    localStorage.setItem("email", emaiValue);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    props.dataFromCreateAccount(email, password);
  };

  return (
    <div className="create_account">
      <div className="account_create_content">
        <h1>Create your Account</h1>
        <div className="details">
          <TextField
            variant="outlined"
            fullWidth
            label="Enter your Name"
            style={{ marginTop: "20px" }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Enter your Email"
            style={{ marginTop: "20px" }}
            type="email"
            onChange={handleChangeEmail}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Enter your Password"
            style={{ marginTop: "20px" }}
            onChange={handleChangePassword}
            type="password"
          />
        </div>
      </div>
      <Button
        variant="contained"
        onClick={handleSubmit}
        type="submit"
        id="create_button"
      >
        Create Account
      </Button>
    </div>
  );
};

export default CreateAccount;
