import React from 'react';
import {connect} from 'react-redux';

class CurrentShop extends React.PureComponent {
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

export default connect(mapStateToProps, null)(CurrentShop);