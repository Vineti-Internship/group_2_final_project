import React from 'react';
import {connect} from 'react-redux';
import {getShopProducts} from '../../actions/shopActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import  Single  from '../food/singleComponent';
import  SGrid  from '../food/gridF';
class CurrentShop extends React.PureComponent {
    componentDidMount() {
        this.props.getShopProducts(this.props.match.params.id);
    }
    render(){
        return (
            <div className='wrap'>
                <Typography style={{marginBottom:25}} variant='h3'>
                    { (this.props.currentShopProducts && this.props.currentShopProducts[0])? this.props.currentShopProducts[0].sName :'Welcome'}
                </Typography>
                <SGrid>
                    {( this.props.currentShopProducts)?
                        this.props.currentShopProducts.map((element) => {
                            return (
                                <Grid item  key={element.id}>
                                    <Single data={{pId: element.id, price:element.price,imageUrl:element.imageUrl,title:element.Name,desc: element.description}}/>
                                </Grid>
                            );
                        }):<div className='loader'></div>
                    }
                </SGrid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentShopProducts: state.shops.currentShopProducts
    };
};

const mapDispatchToProps =  (dispatch) => {
    return {
        getShopProducts: (shopId) => {
            dispatch(getShopProducts(shopId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentShop);