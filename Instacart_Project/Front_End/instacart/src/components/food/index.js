import React from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../actions/addProduct';
import SGrid from './gridF';
import Grid from '@material-ui/core/Grid';
import  Single  from './singleComponent';

class ItemList extends React.PureComponent {
    createThumbnails = () => {
        let Thumbnails = []
        this.props.payload.forEach((element) => {
          Thumbnails.push(
                <Grid item  key={element.id}>
                    <Single data={{price:element.price,imageUrl:element.imageUrl,title:element.Name,desc: element.description}}/>
                </Grid>
            )
        });
        return Thumbnails
    }
    componentDidMount() {
        this.props.fetchData('products');
    }
    render() {
         if (this.props.isLoading) {
            return <div className='loader'></div>      
        }        
        return (
            <SGrid>
                {this.createThumbnails()}
            </SGrid>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        payload: state.products,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
