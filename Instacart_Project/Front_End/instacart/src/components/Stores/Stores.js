import React from 'react';
import { connect } from 'react-redux';
import {getShops} from '../../actions/shopActions';
import Grid from '@material-ui/core/Grid';
import  Single  from './singleStore';
import  SGrid  from '../food/gridF';
import Typography from '@material-ui/core/Typography';
 
class Shops extends React.PureComponent {
    componentDidMount() {
        this.props.getShops();
    }
    render(){
        return (
            <div className='wrap'>
                <Typography style={{marginBottom:25}} variant='h3'>Our Shops</Typography>
                <SGrid>
                    { ( this.props.shops)?
                        this.props.shops.map((element) => {
                        return (
                            <Grid item  key={element.id}>
                               <Single data={{logo:element.logo,title:element.name,desc:element.description,index:element.id}}></Single>
                            </Grid>                                           
                        )
                    }):<div className='loader'></div>
                }
                </SGrid>
            </div>
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