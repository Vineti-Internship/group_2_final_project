import React from 'react';
import { connect } from 'react-redux';
import {getShops} from '../../actions/shopActions';

class Shops extends React.PureComponent {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.getShops();
    }
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

const mapDispatchToProps =  (dispatch) => {
    return {
        getShops: () => {
            dispatch(getShops());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shops);