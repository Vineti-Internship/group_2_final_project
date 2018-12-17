import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
// import Button from '@material-ui/core/Button';

const getModalStyle=(mv)=> {
    const top = 50;
    const left = 50;

    if(mv){
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
            minWidth:930,
            minHeight: 300,
            backgroundColor: 'rgb(70, 54, 54,0.5)'
        };
    }else{
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`
        };
    }
};

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class SimpleModal extends React.Component {
  state = {
      open: false,
  };

  handleOpen = () => {
      this.setState({ open: true });
  };

  handleClose = () => {
      this.setState({ open: false });
  };

  render() {
      const { classes } = this.props;

      return (
        
          <div className={`RemoveStyle padB ${(this.props.mv)?'mv':''}`}>
              <Typography variant="h6" color='primary' onClick={this.handleOpen}>
                  {this.props.title}
              </Typography>

              <Modal
                  open={this.state.open}
                  onClose={this.handleClose}
              >
                  <div style={getModalStyle(this.props.mv)} className={classes.paper}>
  
                      {this.props.children}
                  </div>
              </Modal>
          </div>
      );
  }
}

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;