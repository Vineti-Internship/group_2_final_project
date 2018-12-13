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
import Backet from '../card/main';


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


const Header=(props) => {

  const { classes } = props;


  return (     
        <Toolbar id='toolbar' className='con'>
          <IconButton id='menuIcon' className={classes.menuButton} color='inherit' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
          <Typography id='h6' variant='h6' color='inherit' className={classes.grow}>
            Instacart
          </Typography>
          <Button id='signInButton'><Link  to='/signin'>Sign In</Link> </Button>
          <Button id='signUpButton' ><Link to='/signup'>Sign Up</Link></Button>
          {(localStorage.hasOwnProperty('user'))? <Backet /> :null}
        </Toolbar>    
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);