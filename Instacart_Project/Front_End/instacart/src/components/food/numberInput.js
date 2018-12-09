import React from 'react';
import Input from '@material-ui/core/Input';
class nInput extends React.PureComponent{
    constructor(){
        super();
        this.state={
            value:1
        }
    }
    onChangeHandl(value){
        // console.log(value)
        const nvalue=parseInt(value);
        if(nvalue>0 && nvalue<10000 &&  /^\d+$/.test(value)){
            this.setState({
                value:nvalue
            });
            // console.log(nvalue)
        }
    }
    render(){
        return(
            <Input onChange={e => this.onChangeHandl(e.target.value)}  className='RemoveStyle' placeholder='Quantinity' type='number' value={this.state.value} />
        )
    }
}
export default nInput;