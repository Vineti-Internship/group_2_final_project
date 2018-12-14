import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {signOutUser} from '../../actions/signInAction';
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


class Header extends React.PureComponent {
    constructor(props){
        super(props);
    }
    handleSignOut = () => {
        this.props.signOutUser();
        this.forceUpdate();
    }
    render(){
        const { classes } = this.props;
        return (     
            <Toolbar id='toolbar' className='con'>
                <IconButton id='menuIcon' className={classes.menuButton} color='inherit' aria-label='Menu'>
                    <MenuIcon />
                </IconButton>
                <Typography id='h6' variant='h6' color='inherit' className={classes.grow}>
                    <Link to='/' style={{textDecoration: 'none', color: 'black'}}>Instacart</Link>
                </Typography>
                {(localStorage.getItem('user')) ? <Button id='signInButton' color='inherit' onClick={this.handleSignOut}>Sign Out</Button>: <Link to='/signin' style={{textDecoration: 'none', color: 'black'}}><Button id='signInButton' color='inherit'>Sign In</Button></Link> }
                <Link to='/signup' style={{textDecoration: 'none', color: 'black'}}><Button id='signUpButton' color='inherit' href='/signup'>Sign Up</Button></Link>
                {(localStorage.getItem('user')) ? <Backet /> :null}
            </Toolbar>    
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOutUser: () => {
            dispatch(signOutUser());
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.users.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));