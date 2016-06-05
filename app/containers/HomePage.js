import React, { Component } from 'react';
import Home from '../components/Home';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class HomePage extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Home />
      </MuiThemeProvider>
    );
  }
}
