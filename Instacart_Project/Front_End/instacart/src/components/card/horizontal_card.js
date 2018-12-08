import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = () => ({
    card: {
        display: 'flex'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
});

function MediaControlCard(props) {
    const { classes } = props;

    return (
        <Grid item xs={12}>
            <Card className={classes.card}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {props.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Store: {props.store}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Price: {props.price} AMD
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Quantinity: {props.quantinity}
                        </Typography>
                        <DeleteIcon style={{color : 'gray'}} />
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={props.thumbnailUrl}
                    title={props.title}
                />
            </Card>
        </Grid>
    );
}

MediaControlCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    store: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantinity: PropTypes.number.isRequired,

};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
