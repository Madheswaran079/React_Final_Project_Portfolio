import React from 'react';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import LaptopIcon from '@mui/icons-material/Laptop';
import TabletIcon from '@mui/icons-material/Tablet';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ClearIcon from '@mui/icons-material/Clear';

const Top = () => {
  const handleLaptopClick = () => {
    document.body.style.width = "1366px";
    document.body.style.height = "768px";
  };

  const handleTabletClick = () => {
    document.body.style.width = "768px";
    document.body.style.height = "1024px";
  };

  const handleMobileClick = () => {
    document.body.style.width = "375px";
    document.body.style.height = "667px";
  };

  const handleCancelClick = () => {
    document.getElementById('top-component').style.display = 'none';
    document.getElementById('second-appbar').style.top ='0';
  };

  return (
    <div id="top-component" >
      <AppBar position="fixed" id="first-appbar">
        <Toolbar style={{display:'flex',justifyContent:'space-evenly'}}>
        <IconButton onClick={handleLaptopClick}>
            <LaptopIcon />
        </IconButton>
        <IconButton onClick={handleTabletClick}>
            <TabletIcon />
        </IconButton>
        <IconButton onClick={handleMobileClick}>
            <PhoneAndroidIcon />
        </IconButton>
        <IconButton onClick={handleCancelClick}>
            <ClearIcon />
        </IconButton>
        </Toolbar>
        </AppBar>
    </div>
  );
};

export default Top;
