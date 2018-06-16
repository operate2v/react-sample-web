import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Header from '../../components/header';


export default class Partners extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <h1>Partners</h1>
        <Typography variant="display3">Connecting the world through chat.</Typography>
      </div>
    );
  }
}
