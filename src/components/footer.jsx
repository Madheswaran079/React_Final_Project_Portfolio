import React from "react";
import { Box } from "@mui/material";
import { BottomNavigation,BottomNavigationAction } from "@material-ui/core";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

function Footer() {
    return (
      <div id='footer'>
      <Container maxWidth='xl' style={{backgroundColor:'black'}}>
      <BottomNavigation style={{backgroundColor:'black'}} >
      <BottomNavigationAction href='https://www.linkedin.com/in/madheswaran-v-8b2b90245' target='_blank'  rel='noreferrer' style={{color:'white'}} icon={<LinkedInIcon />} />
      <BottomNavigationAction href='https://github.com/Madheswaran079' target='_blank'  rel='noreferrer' style={{color:'white'}} icon={<GitHubIcon />}/>
      <BottomNavigationAction href='https://www.instagram.com/hero._.of._.fairy/' target='_blank'  rel='noreferrer' style={{color:'white'}} icon={<InstagramIcon />} />
      </BottomNavigation><br />
      <Box textAlign={"center"} >
      <Typography variant="caption"></Typography>
      </Box>
      </Container>
      </div>
);
}

export default Footer;