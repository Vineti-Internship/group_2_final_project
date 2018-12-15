import React from 'react';
import './singleF.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import NInput from './numberInput'
import CModal from './modal'

const styles = {
  card: {
    maxWidth: 345,
    minHeight: '330px !important'
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    backgroundSize:'cover'
  },
  fmedia:{
    height:"100%",
    maxWidth: 500,
    maxHeight:'60vh',
  }
};

const ImgMediaCard=(props)=> {
    const { classes } = props;
    return (
        <Card className={`RemoveStyle ${classes.card}`}  >
            <CardActionArea className='RemoveStyle'>
                <CardMedia
                component="img"
                alt={props.data.title}
                className={classes.media}
                height="140"
                image={props.data.imageUrl}
                title={props.data.title}
                />
                <CardContent className='RemoveStyle'>
                <CModal mv=''  title={props.data.title} >
                    <Typography variant="h6" align='center' id="modal-title">
                        {props.data.title}
                    </Typography>
                    <CardMedia
                        component="img"
                        alt={props.data.title}
                        className={classes.fmedia}
                        image={props.data.imageUrl}
                        title={props.data.title}
                        />
                    <CardContent>
                    <Typography variant="body1" style={{fontSize:'1.2rem'}} paragraph >
                        {props.data.desc}
                    </Typography>
                    </CardContent>             
                </CModal>
                <Typography gutterBottom variant="subtitle2">{`Price: ${props.data.price} AMD`}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className='RemoveStyle marginB' >
                <NInput pId={props.data.pId} />
            </CardActions>
         </Card>
    );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
