import React from 'react';
// import {Link} from 'react-router-dom';
import './Header.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


// const Header = (props) => {
//     return (
//         <React.Fragment>
//             <h1>Header</h1>
//             <Link to='/signin'>Sign In</Link>
//             <br />
//             <Link to='/signup'>Sign Up</Link>
//         </React.Fragment>
//     )
// }

// export default Header;



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
        <Toolbar id='toolbar'>
          <IconButton id='menuIcon' className={classes.menuButton} color='inherit' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
          <Typography id='h6' variant='h6' color='inherit' className={classes.grow}>
            Instacart
          </Typography>
          <Button id='signInButton' color='inherit' href='/signin'>Sign In</Button>
          <Button id='signUpButton' color='inherit' href='/signup'>Sign Up</Button>
        </Toolbar>    
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);