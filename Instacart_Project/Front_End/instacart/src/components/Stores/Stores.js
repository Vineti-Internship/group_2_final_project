import React from 'react';
import { connect } from 'react-redux';

class Shops extends React.PureComponent {
    render(){
        return (
            <React.Fragment>
                <h1>Our Shops</h1>
                <ul>
                    {this.props.shops.map((shop, index) => {
                        return (
                            <li key={index}>
                                {shop.name}
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
        shops: state.shops.shops
    }
}

export default connect(mapStateToProps, null)(Shops);