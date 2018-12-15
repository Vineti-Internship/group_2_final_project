import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader';
import StarIcon from '@material-ui/icons/StarBorder';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

  heroContent: {
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
});

const tiers = [
    {
      title: 'Free',
      price: '0',
      description: [
        'Experience <1 year',
        'Speed: Slow',
      ],
      buttonText: 'Choose',
      buttonVariant: 'outlined',
    },
    {
      title: 'Regular',
      subheader: 'Most popular',
      price: '15',
      description: [
        'Experience [1..9] months',
        'Speed: Medium',
      ],
      buttonText: 'Choose',
      buttonVariant: 'contained',
    },
    {
      title: 'premium',
      price: '30',
      description: [
        'Experience >9 months',
        'Speed: Fast',
      ],
      buttonText: 'Choose',
      buttonVariant: 'outlined',
    },
];
const Pricing=(props)=> {
  const { classes } = props;

  return (
    <Grid  container spacing={40} alignItems="flex-end">
    {tiers.map(tier => (
        // Enterprise card is full width at sm breakpoint
        <Grid item key={tier.title}  md={4}>
        <Card>
            <CardHeader
            title={tier.title}
            subheader={tier.subheader}
            titleTypographyProps={{ align: 'center' }}
            subheaderTypographyProps={{ align: 'center' }}
            action={tier.title === 'Pro' ? <StarIcon /> : null}
            />
            <CardContent>
            <div className={classes.cardPricing}>
                <Typography component="h2" variant="h3" color="textPrimary">
                {tier.price} AMD
                </Typography>
            </div>
            {tier.description.map(line => (
                <Typography variant="subtitle1" align="center" key={line}>
                {line}
                </Typography>
            ))}
            </CardContent>
            <CardActions className={classes.cardActions}>
            <Button style={{marginBottom:'5px'}} fullWidth variant={tier.buttonVariant} color="primary">
                {tier.buttonText}
            </Button>
            </CardActions>
        </Card>
        </Grid>
    ))}
    </Grid>
    )
}
export default withStyles(styles)(Pricing);
