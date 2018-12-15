import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import {connect} from 'react-redux';
import {deleteP} from '../../actions/orderActions';

class Remove extends React.PureComponent{
    handle=()=>{
        this.props.deleteP(this.props.id)
    }
    render(){
        return(
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
                <DeleteIcon onClick={this.handle} style={{color : 'gray'}} />
            </IconButton>
          </Tooltip>
        )
    }
    
}
const mapDispatchToProps =  (dispatch) => {
    return {
        deleteP: (elementId) => {
            dispatch(deleteP(elementId));
        }
    }
}

export default connect(null, mapDispatchToProps)(Remove);
// export default Remove;