import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PopoverB from './popover'
import Product from './horizontal_card'

class Backet extends React.Component {
  render() {
        return (
            <PopoverB count={4} >
            {/* <h2>Your Current order</h2> */}
            <Grid
                container
                direction="column"
                spacing={16}
                justify="center"
                alignItems="center"
            >
                <Typography component="h5" variant="h5">
                Your Current order
                </Typography>
                <Product title="Standard gyros Baguetta"
                thumbnailUrl='https://www.menu.am/resources/default/img/restaurant_products/small/1479058039-1242.jpeg'
                quantinity={1}
                price={1100}
                store="Mr. Gyros"
                />
                <Product title="Standard gyros Baguetta"
                thumbnailUrl='https://www.menu.am/resources/default/img/restaurant_products/small/1479058039-1242.jpeg'
                quantinity={1}
                price={1100}
                store="Mr. Gyros"
                />
                <Product title="Standard gyros Baguetta"
                thumbnailUrl='https://www.menu.am/resources/default/img/restaurant_products/small/1479058039-1242.jpeg'
                quantinity={1}
                price={1100}
                store="Mr. Gyros"
                />
                <Product title="Standard gyros Baguetta"
                thumbnailUrl='https://www.menu.am/resources/default/img/restaurant_products/small/1479058039-1242.jpeg'
                quantinity={1}
                price={1100}
                store="Mr. Gyros"
                />                                            
            </Grid>
            </PopoverB>
        );
    }
}

export default Backet;
