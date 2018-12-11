import React from 'react';
import {connect} from 'react-redux';
import {getShopProducts} from '../../actions/shopActions';

class CurrentShop extends React.PureComponent {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.getShopProducts(this.props.match.params.id);
    }
    render(){
        return (
            <React.Fragment>
                <h1>Current Shop</h1>
                <ul>
                    {this.props.currentShopProducts.map((product, index) => {
                        return (
                            <li>
                                {product.name} - {product.price}
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentShopProducts: state.shops.currentShopProducts
    }
}

const mapDispatchToProps =  (dispatch) => {
    return {
        getShopProducts: (shopId) => {
            dispatch(getShopProducts(shopId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentShop);