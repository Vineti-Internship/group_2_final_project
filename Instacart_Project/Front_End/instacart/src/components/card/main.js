import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PopoverB from './popover'
import Product from './horizontal_card'
import {connect} from 'react-redux';
import {getOrder} from '../../actions/addProduct';

class Backet extends React.PureComponent {
    componentDidMount() {
        this.props.getOrder(1);
        //just constant now ,read from localStorage 
    }
    render() {
        return (
            <PopoverB count={0} >
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
                {( this.props.currentDbOrder)?
                        this.props.currentDbOrder.products.map((element) => {
                        return (
                            <a>
                                {element.Name}
                            </a>
                            // <Grid item  key={element.id}>
                            //     <Single data={{price:element.price,imageUrl:element.imageUrl,title:element.Name,desc: element.description}}/>
                            // </Grid>
                        )
                        }):null
                }
                {/* <Product title="Standard gyros Baguetta"
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
                />                                             */}
            </Grid>
            </PopoverB>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        currentDbOrder: state.currentDbOrder
    }
}
const mapDispatchToProps =  (dispatch) => {
    return {
        getOrder: (userId) => {
            dispatch(getOrder(userId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Backet);
// export default Backet;
