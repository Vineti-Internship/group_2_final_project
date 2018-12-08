import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <React.Fragment>
            <h1>Header</h1>
            <Link to="/signin">Sign In</Link>
            <br />
            <Link to="/signup">Sign Up</Link>
        </React.Fragment>
    )
}

export default Header;