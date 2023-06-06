import React from "react";
import backgroundImage from '../statics/images/LoginL_Final1.png'
import ccs_logo from '../statics/images/CCS_logo.png'

import '../statics/styles/styles.css'
import '../statics/styles/index.css'
import "./login.css"
import { Box, Button, TextField } from "@mui/material";

const Login = () => {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter:'contrast(80%)'
  };
  const inputStyle: React.CSSProperties = {
    background: '#0B0B0E',
    border: '1px solid #c3b2cf',
    boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.9)',
    borderRadius: '5px',
    color: '#FFF',

  };
  const signInButtonStyle: React.CSSProperties = {
    background: 'linear-gradient(270deg, #47156E -6.84%, #341050 30.49%, #0E0217 100.14%)',
    boxShadow: 'inset 0px 0px 4px #B36DEA',
    filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.6))',
    width: '40%'
  };

  return (
    <div className="body-wrapper" style={backgroundStyle}>
      <div className="body-responsive login--wrapper">
        <div className="login-form">
          <>
            <div className="login-form--header">
              <h1 className="login-header--text login-headerT"> College of Computer Studies </h1>
              <h2 className="login-header--text login-subheaderT"> Programming Contest</h2> <br/>
              <img src={ccs_logo}  className="ccs-logo" alt="CCS LOGO"/>
            </div>
              <Box
                component="form"
                noValidate
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { sm: '1fr' },
                  gridTemplateRows: { sm: '1fr 1fr 1fr' },
                  gap: 2,
                }}
              >
                <TextField id="Team_ID" label="Team ID" variant="filled" size="small" style={inputStyle}/>
                <TextField id="User_ID" label="Username" variant="filled" size="small" style={inputStyle}/>
                <TextField type="password" id="Password" label="Password" variant="filled" size="small" style={inputStyle}/>

                <Button variant="contained" style={signInButtonStyle}>Sign In</Button>
              </Box>
            </>
        </div>
      </div>
    </div>
  )
};

export default Login;
