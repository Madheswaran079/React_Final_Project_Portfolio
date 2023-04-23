import React, { useEffect, useState } from 'react';
import {AppBar, Toolbar, makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logoImg: {
        marginRight: theme.spacing(2),
    },
    appBarTransparent: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    appBarSolid: {
        backgroundColor: 'black',
    }
}));

function Header()
{
    const classes = useStyles();

    const [navBackground,setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground

  
        const handlescroll = () => {
            const show = window.scrollY > 70
            if(show){
                setNavBackground('appBarSolid')
            }
            else{
                setNavBackground('appBarTransparent')
            }
        }
        useEffect(() => {
        document.addEventListener('scroll',handlescroll)
        return () => {
            document.removeEventListener('scroll',handlescroll)
        }
    }, [])

    return(
        <div className={classes.root}>
            <AppBar position="fixed" id='appBar' className={classes[navRef.current]}>
                <Toolbar style={{display:'flex',justifyContent:'space-evenly'}}>
                <div class="logo">
                <i class="fa-duotone fa-m fa-2xl"></i>
                <i class="fa-duotone fa-w fa-2xl"></i>
                </div>
                    <Link to='/' style={{textDecoration:'none'}}><h6> Home</h6></Link>
                    <Link to='/about' style={{textDecoration:'none'}}><h6>About</h6></Link> 
                    <Link to='/project' style={{textDecoration:'none'}}><h6>Projects</h6></Link>
                    <Link to='/contact' style={{ textDecoration:'none'}}><h6>Contact</h6></Link>
                </Toolbar>
            </AppBar>
            </div>
    );
}

export default Header;