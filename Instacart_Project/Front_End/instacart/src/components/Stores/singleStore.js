import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      maxWidth: 345,
      minHeight: '265px !important'
    },
    media: {
      // ⚠️ object-fit is not supported by IE 11.
      objectFit: 'cover',
      backgroundSize:'cover'
    },
    fmedia:{
      width:100,
      height:'60vh'
    },
    link:{
        textDecoration:'none',
        color:'black'
    }
  };

  const ImgMediaCard=(props)=> {
    const { classes } = props;
    return (
        <Card className={`RemoveStyle ${classes.card}`}  >
            <CardActionArea className='RemoveStyle'>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                className={classes.media}
                height="140"
                image={props.data.logo}
                title="Contemplative Reptile"
                />
                <CardContent className='RemoveStyle'>

                <Typography gutterBottom variant="h6">
                    <Link className={classes.link} to={`/shops/${props.data.index}`}>{props.data.title}</Link>
                </Typography>
                <Typography variant="body1" paragraph >
                        {props.data.desc}
                </Typography>
                </CardContent>
            </CardActionArea>

         </Card>
    );
}

  ImgMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ImgMediaCard);