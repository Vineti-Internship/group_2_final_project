import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {addProduct} from '../../actions/orderActions';

class nInput extends React.PureComponent{
    constructor(props){
        super();
        this.state={
            value:1
        };
    }
    onChangeHandl(value){
        const nvalue=parseInt(value);
        if(nvalue>0 && nvalue<10000 &&  /^\d+$/.test(value)){
            this.setState({
                value:nvalue
            });
        }
    }
    handleClick=()=>{
        const q = this.state.value;
        this.props.addProduct({
            'order_id':this.props.oId,
            'product_id':this.props.pId,
            'quantinity': q
        });
        this.setState({
            value:1
        });
    }
    render(){
        return(
            <React.Fragment>
                <Input onChange={e => this.onChangeHandl(e.target.value)}  className='RemoveStyle' placeholder='Quantinity' type='number' value={this.state.value} />
                <Button size="small" onClick={this.handleClick}  color="primary">
                    Add to Card
                </Button>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {     
        oId: (state.orders[0])?state.orders[0].order.id:null,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (obj)=>{
            dispatch(addProduct(obj));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(nInput);
