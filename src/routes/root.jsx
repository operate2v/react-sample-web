import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/home';
import Partners from '../pages/partners';
import Products from '../pages/products';
import Download from '../pages/download';

export default class Root extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/partners" component={Partners} />
          <Route path="/products" component={Products} />
          <Route path="/download" component={Download} />
        </div>
      </BrowserRouter>
    );
  }
}
