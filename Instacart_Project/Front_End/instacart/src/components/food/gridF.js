import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import  Single  from './singleComponent';
import helpFetch from '../../helpers/generalFetch'

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
          <Grid item >
            <Single data={{price:1000,imageUrl:'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3456,w_5184,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/superdeluxe_owgtql.jpg',title:'Lorem',desc:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}}/>
          </Grid>
          <Grid item >
            <Single data={{price:1000,imageUrl:'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3456,w_5184,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/superdeluxe_owgtql.jpg',title:'Lorem',desc:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}}/>
          </Grid>
          <Grid item >
            <Single data={{price:1000,imageUrl:'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3456,w_5184,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/superdeluxe_owgtql.jpg',title:'Lorem',desc:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}}/>
          </Grid>
          <Grid item >
            <Single data={{price:1000,imageUrl:'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3456,w_5184,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/superdeluxe_owgtql.jpg',title:'Lorem',desc:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}}/>
          </Grid>
          <Grid item >
            <Single data={{price:1000,imageUrl:'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3456,w_5184,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/superdeluxe_owgtql.jpg',title:'Lorem',desc:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}}/>
          </Grid>
          <Grid item >
            <Single data={{price:1000,imageUrl:'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3456,w_5184,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/superdeluxe_owgtql.jpg',title:'Lorem',desc:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}}/>
          </Grid>   
          <Grid item >
            <Single data={{price:1000,imageUrl:'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3456,w_5184,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/superdeluxe_owgtql.jpg',title:'Lorem',desc:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}}/>
          </Grid>    
        </Grid>
      </div>
    );
  }
  
  PGrid.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(PGrid);