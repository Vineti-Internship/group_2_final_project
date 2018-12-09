import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Badge from '@material-ui/core/Badge';

const styles = theme => ({
    wrapper: {
        margin: theme.spacing.unit * 2,
        maxHeight:'60vh',
        textAlign:'left'
    },
});

class SimplePopover extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>
                <IconButton
                    aria-owns={open ? 'simple-popper' : undefined}
                    aria-haspopup='true'
                    variant='contained'
                    aria-label='Card'
                    className='right'
                    onClick={this.handleClick}
                >
                    <Badge color="secondary"  badgeContent={this.props.count} >
                        <SvgIcon>
                            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                        </SvgIcon>
                    </Badge>
                </IconButton>
                <Popover
                    id='simple-popper'
                    
                    open={open}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <div className={classes.wrapper}>{this.props.children}</div>
                </Popover>
            </div>
        );
    }
}

SimplePopover.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any.isRequired,
    count: PropTypes.number.isRequired,  
};

export default withStyles(styles)(SimplePopover);
