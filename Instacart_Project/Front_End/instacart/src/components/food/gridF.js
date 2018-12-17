import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import  Single  from './singleComponent';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        minWidth:'400px',
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

const PGrid = (props)=> {
    const { classes } = props;
  
    return (
        <div className={`RemoveStyle ${classes.root}`} >
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={24}
            >
                {props.children}
            </Grid> 
        </div>
    );
};
  
PGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(PGrid);