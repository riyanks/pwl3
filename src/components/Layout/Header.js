import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography, autocompleteClasses } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import '../../styles/HeaderStyles.css';
import Logo from "../../images/logo2.png";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    //handle menu click
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    //Menu drawer
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor:'black' }}>
            <Typography
                component={"div"}
                sx={{ flexGrow: 1, my: 2}}
            >
                <img src={Logo} alt="D-Cafe" height={"30"} />
            </Typography>
            <Divider />
            <ul className='mobile-navigation'>
                <li>
                    <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </li>
            </ul>
        </Box>
    )
    return (
        <>
            <Box>
                <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
                    <Toolbar>
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            edge='start'
                            sx={{ mr: 2, display: { sm: "none" } }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component={"div"}
                            sx={{ flexGrow: 1 }}
                        >
                            <img src={Logo} alt="D-Cafe" height="40" />
                        </Typography>

                        <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
                            <ul className='navigation-menu'>
                                <li>
                                    <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/about"}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/contact"}>Contact</NavLink>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer 
                        variant='temporary' 
                        open={mobileOpen} 
                        onClose={handleDrawerToggle} 
                        sx={{
                            display:{xs:'block', sm:'none'},
                            "& .MuiDrawer-paper":{
                                boxSizing:'border-box',
                                width:"240px",
                            },
                            }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box sx={{ }}>
                    <Toolbar />
                </Box>
            </Box>
        </>
    );
}

export default Header