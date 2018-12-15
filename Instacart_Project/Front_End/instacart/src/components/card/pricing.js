import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader';
import StarIcon from '@material-ui/icons/StarBorder';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const tiers = [
    {
      title: 'Free',
      subheader:'Press Place Order to Continue',
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
      price: '20',
      description: [
        'Experience [1..9] months',
        'Speed: Medium',
      ],
      buttonText: 'Choose',
      buttonVariant: 'contained',
    },
    {
      title: 'premium',
      subheader:'Press Place Order to Continue',
      price: '50',
      description: [
        'Experience >9 months',
        'Speed: Fast',
      ],
      buttonText: 'Choose',
      buttonVariant: 'outlined',
    },
];
class Pricing extends React.PureComponent{
    constructor(){
        super();
        this.state={
            activeIndex:1
        }
    }
    clickHandler(i){
        this.setState({
            activeIndex:i
        });
    }
    render(){
    return (
        <Grid  container spacing={40} alignItems="flex-end">
        {tiers.map( (tier,i) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title}  md={4}>
            <Card>
                <CardHeader
                title={tier.title}
                subheader={(i===this.state.activeIndex)?tier.subheader:''}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                action={tier.title === 'Regular' ? <StarIcon /> : null}
                />
                <CardContent>
                <div /*className={classes.cardPricing}*/>
                    <Typography component="h2" variant="h3" color="textPrimary">
                    {tier.price} $
                    </Typography>
                </div>
                {tier.description.map(line => (
                    <Typography variant="subtitle1" align="center" key={line}>
                    {line}
                    </Typography>
                ))}
                </CardContent>
                <CardActions /*className={classes.cardActions}*/ >
                <Button onClick={()=>this.clickHandler(i)} style={{marginBottom:'5px'}} fullWidth variant={(i===this.state.activeIndex)?'contained':'outlined'} color='primary'>
                    {tier.buttonText}
                </Button>
                </CardActions>
            </Card>
            </Grid>
        ))}
        </Grid>
        )
    }
}
export default Pricing;
// export default withStyles(styles)(Pricing);
