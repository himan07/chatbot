import React, { useState } from "react";
import "../assets/css/LoginPage.css";
import {
  Button,
  Card,
  TextField,
  Dialog,
  DialogContent,
} from "@mui/material";
import CreateAccount from "./CreateAccount";

const LoginPage = (props) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (email && password) {
      setIsLoggedIn(true);
      console.log("Logged in successfully");
    } else {
      setIsLoggedIn(false);
      console.log("Invalid email or password");
    }
    sessionStorage.setItem("isLoggedIn", isLoggedIn)
  };


  const handleChangeE = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeP = (event) => {
    setPassword(event.target.value);
  };

  const handleDataFromCreateAccount = (email, password) => {
    setEmail(email);
    setPassword(password);
    console.log("data", email, password)
  };

  return (
    <div className="loginpage_container">
      <div className="card">
        <Card
          variant="outlined"
          style={{
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingBottom: "30px",
            height: "300px",
          }}
        >
          <h1 className="login">Login to your Account</h1>
          <TextField
            label="Enter your Email"
            variant="outlined"
            fullWidth
            onChange={handleChangeE}
            value={email}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            style={{ marginTop: "15px" }}
            onChange={handleChangeP}
            value={password}
          />
          <div style={{ float: "right", paddingTop: "30px", color: "#354c64" }}>
            <Button
              variant="contained"
              size="lg"
              style={{
                backgroundColor: "#354c64",
                textTransform: "capitalize",
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
          <div className="not_account">
            <p onClick={handleClick} style={{ cursor: "pointer" }}>
              Don't have an account? Click Here{" "}
            </p>
          </div>
        </Card>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent style={{ height: "500px" }}>
          <CreateAccount
            dataFromCreateAccount={handleDataFromCreateAccount}
            existingAccounts={props.existingAccounts}
            
          />
        </DialogContent>

      </Dialog>
    </div>
  );
};

export default LoginPage;
