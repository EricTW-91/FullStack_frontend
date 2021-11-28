import { AppBar, Button, ButtonGroup, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar color="default" position="static">
            <div className="navBar">
                <Button variant="text" id="logoBtn" component={Link} to='/'>LOGO</Button>
                <ButtonGroup variant="text">
                    <Button className='navBtn' component={Link} to='/signup'>Sign Up</Button>
                    <Button className='navBtn' component={Link} to='/login'>Login</Button>
                </ButtonGroup>
            </div>
        </AppBar>
    )
}

export default Header;