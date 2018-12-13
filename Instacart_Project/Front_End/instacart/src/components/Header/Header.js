import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


function Header(props) {

    const { classes } = props;


    return (     
        <Toolbar id='toolbar' className='con'>
            <IconButton id='menuIcon' className={classes.menuButton} color='inherit' aria-label='Menu'>
                <MenuIcon />
            </IconButton>
            <Typography id='h6' variant='h6' color='inherit' className={classes.grow}>
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}>Instacart</Link>
            </Typography>
            <Link to="/signin" style={{textDecoration: 'none', color: 'black'}}><Button id='signInButton' color='inherit' href='/signin'>Sign In</Button></Link>
            <Link to="/signup" style={{textDecoration: 'none', color: 'black'}}><Button id='signUpButton' color='inherit' href='/signup'>Sign Up</Button></Link>
        </Toolbar>    
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);