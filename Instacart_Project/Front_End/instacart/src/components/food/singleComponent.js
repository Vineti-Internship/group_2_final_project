import React from 'react';
import './singleF.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NInput from './numberInput'
import CModal from './modal'
// import Input from '@material-ui/core/Input';

// import InputLabel from '@material-ui/core/InputLabel';


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
                image={props.data.imageUrl}
                title="Contemplative Reptile"
                />
                <CardContent className='RemoveStyle'>
                
                {/* <Typography gutterBottom variant="h5" component="h2"> */}
                <CModal   title={props.data.title} >
                    <Typography variant="h6" align='center' id="modal-title">
                        {props.data.title}
                    </Typography>
                    <CardMedia
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
                {/* </Typography> */}
                </CardContent>
            </CardActionArea>
            <CardActions className='RemoveStyle marginB' >
                <NInput />
                {/* <Input  className='RemoveStyle' placeholder='Quantinity' type='number' value='1' /> */}
                <Button size="small"  color="primary">
                    Add to Card
                </Button>
            </CardActions>
         </Card>
    );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
