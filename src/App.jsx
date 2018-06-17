import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Root from './routes/root';

/* 사라져라 그림자여! */
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
theme.shadows = [];

export default class App extends Component {
  state = {};

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Root />
      </MuiThemeProvider>
    );
  }
}
