import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IsScale from '../utils/is-scale';

const styles = theme => ({
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
    width: IsScale ? 380 : 100,
    height: IsScale ? 60 : 20,
    marginRight: IsScale ? 15 : 6,
  },
  bootstrapInput: {
    fontSize: IsScale ? 21 : 8,
    borderRadius: 5,
    backgroundColor: 'white',
    border: '1px solid #fff',
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

class SendInput extends Component {
  state = {};
  render() {
    return (
      <TextField
        defaultValue=""
        id="bootstrap-input"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: this.props.classes.bootstrapRoot,
            input: this.props.classes.bootstrapInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: this.props.classes.bootstrapFormLabel,
        }}
      />
    );
  }
}

SendInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SendInput);
