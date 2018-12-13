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
                        this.props.currentDbOrder.map((element,index)=>{
                            return (
                                <Product title={element.product.Name} key={index}
                                thumbnailUrl={element.product.imageUrl}
                                quantinity={element.quantinity}
                                price={element.product.price}
                                store={element.product.sName}
                                />
                            )

                        }):null
                }
                {/* <Product title="Standard gyros Baguetta"
                thumbnailUrl='https://www.menu.am/resources/default/img/restaurant_products/small/1479058039-1242.jpeg'
                quantinity={1}
                price={1100}
                store="Mr. Gyros"
                />
                                                  */}
            </Grid>
            </PopoverB>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        currentDbOrder: state.orders
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
