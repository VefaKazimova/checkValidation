import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Stack, Button } from "@mui/material";
export default function Form({ todos, setTodos }) {
  const [nameValue, setNameValue] = React.useState("");
  const [nameValidation, setNameValidation] = React.useState(false);
  const [emailValue, setEmailValue] = React.useState("");
  const [emailValidation, setEmailValidation] = React.useState(false);
  const [emailRegexValidation, setEmailRegexValidation] = React.useState(false);
  const [passwordValue, setPasswordValue] = React.useState("");
  const [passwordValidation, setPasswordValidation] = React.useState(false);
  const [passwordRegexValidation, setPasswordRegexValidation] =
    React.useState(false);
  const [passwordRepeatValue, setPasswordRepeatValue] = React.useState("");
  const [passwordRepeatValidation, setPasswordRepeatValidation] =
    React.useState(false);
  const [checkPasswordRepeatVald, setcheckPasswordRepeatVald] =
    React.useState(false);
    const addTodo = () => {
      if(nameValue!="" && emailValue!=""){
        setTodos([...todos, { id: Date.now(), name: nameValue ,email:emailValue }]);
        setNameValue("");
        setEmailValue("")
        setPasswordValue("")
        setPasswordRepeatValue("")
      }
    };
  
  const checkValidation = () => {
    if (!nameValue.trim()) {
      setNameValidation(true);
    } else {
      setNameValidation(false);
    }

    if (!emailValue.trim()) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
      checkEmailRegEx();
    }
    if (!passwordValue.trim()) {
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
      checkPasswordRegex();
    }
    if (!passwordRepeatValue.trim()) {
      setPasswordRepeatValidation(true);
    } else {
      setPasswordRepeatValidation(false);
      checkPasswordRepeat();
    }
  };
  const handleNameChange = (e) => {
    setNameValue(e.target.value);
    setNameValidation(false);
  };
  const checkEmailRegEx = () => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailValue.match(mailformat)) {
      setEmailRegexValidation(false);
    } else {
      setEmailRegexValidation(true);
    }
  };
  const handleEmailChange=(e)=>{
    setEmailValue(e.target.value);
    setEmailValidation(false)
  }
  const checkPasswordRegex = () => {
    var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (passwordValue.match(regularExpression)) {
      setPasswordRegexValidation(false);
    } else {
      setPasswordRegexValidation(true);
    }
  };
  const handlePasswordChange=(e)=>{
    setPasswordValue(e.target.value);
    setPasswordValidation(false)
  }
  const checkPasswordRepeat = () => {
    if (passwordRepeatValue != passwordValue) {
      setcheckPasswordRepeatVald(true);
    } else {
      setcheckPasswordRepeatVald(false);
    }
  };
  const handlePasswordRepeatChange=(e)=>{
    setPasswordRepeatValue(e.target.value);
    setPasswordRepeatValidation(false)
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormControl>
        <InputLabel htmlFor="component-outlined" >Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Name"
          type="name"
          onChange={handleNameChange} 
          value={nameValue}
        />
        {nameValidation ? (
          <p style={{ color: "red" }}>This field is required</p>
        ) : (
          ""
        )}
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Email</InputLabel>
        <OutlinedInput
          id="component-outlined"
          type="email"
          label="Email"
          onChange={handleEmailChange}
          value={emailValue}
        />
        {emailValidation ? (
          <p style={{ color: "red" }}>This field is required</p>
        ) : (
          ""
        )}
        {emailRegexValidation ? (
          <p style={{ color: "red" }}>Invalid email</p>
        ) : (
          ""
        )}
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Password</InputLabel>
        <OutlinedInput
          id="component-outlined"
          type="password"
          label="Password"
          onChange={handlePasswordChange}
          value={passwordValue}
        />
        {passwordValidation ? (
          <p style={{ color: "red" }}> This field is required</p>
        ) : (
          ""
        )}
        {passwordRegexValidation ? (
          <p style={{ color: "red" }}>Invalid password</p>
        ) : (
          ""
        )}
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Password again</InputLabel>
        <OutlinedInput
          id="component-outlined"
          type="password"
          label="Password again"
          onChange={handlePasswordRepeatChange}
          value={passwordRepeatValue}
        />
      </FormControl>
      {passwordRepeatValidation ? (
        <p style={{ color: "red" }}> This field is required</p>
      ) : (
        ""
      )}
      {checkPasswordRepeatVald ? (
        <p style={{ color: "red" }}>This password is wrong</p>
      ) : (
        ""
      )}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary" onClick={checkValidation}>
          Submit
        </Button>
        <Button variant="contained" color="success" onClick={addTodo}>
          Add
        </Button>
      </Stack>
    </Box>
  );
}
