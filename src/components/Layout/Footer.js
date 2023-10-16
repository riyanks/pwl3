import { Box, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
// import {  IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';

const Footer = () => {
  return (
    <>
        <Box sx={{textAlign:"center", bgcolor:"black", color:"white", p:3}}>
            <Box sx={{my:3, "& svg":{
                fontSize:"60px",
                cursor:"pointer",
                mr: 2,
                },
                "& svg:hover":{
                    color:"goldenrod",
                    transform: "translateX(5px)",
                    transition: "all 400ms",
                }
            }}>
                {/* Icons */}
                {/* <InstagramIcon />
                <LinkedInIcon />
                <FacebookIcon />
                <GitHubIcon /> */}
                {/* <IconButton component={Link} to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon />
                </IconButton> */}
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon />
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </a>
            </Box>
            <Typography 
                variant='h5' 
                sx={{
                    "@media (max-width:600px)":{
                    fontSize: "1rem",
                    },
                }}
            >
                All Rights Reserved &copy; Riyan Khoiri
            </Typography>
        </Box>
    </>
  );
}

export default Footer;