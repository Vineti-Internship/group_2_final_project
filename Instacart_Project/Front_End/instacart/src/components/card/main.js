import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PopoverB from './popover'
import Product from './horizontal_card'
import {connect} from 'react-redux';
import {getOrder} from '../../actions/orderActions';

class Backet extends React.Component {
    async componentDidMount() {
        const a = await JSON.parse(localStorage.getItem('user'));
        this.props.getOrder(a.id);       
    }
    render() {
        return (
            <PopoverB count={(this.props.currentDbOrder)?this.props.currentDbOrder.length:''} >
            <Grid
                container
                direction="column"
                spacing={16}
                justify="center"
                alignItems="center"
            >
                <Grid item>                                         
                    <Typography component="h5" variant="h5">
                        Your Current order
                    </Typography>
                </Grid> 
                {( this.props.currentDbOrder &&  this.props.currentDbOrder[0] && this.props.currentDbOrder[0].product)?
                        this.props.currentDbOrder.map((element,index)=>{
                            return (
                                <Product 
                                id={element.id} 
                                title={element.product.Name} 
                                key={index}
                                thumbnailUrl={element.product.imageUrl}
                                quantinity={element.quantinity}
                                price={element.product.price}
                                store={element.product.sName}
                                />
                            )

                        }):null
                }
                <Grid item>                                         
                    <Typography component="h5" variant="h5">
                        Total Cost {(this.props.currentDbOrder && this.props.currentDbOrder[0]  &&  this.props.currentDbOrder[0].order)? this.props.currentDbOrder[0].order.pCost:0 }
                    </Typography>
                </Grid> 
            </Grid>
            </PopoverB>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        currentDbOrder: state.orders,
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