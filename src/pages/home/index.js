import React, { Component } from 'react';
import Header from '../../components/header';
import HomeIntro from '../../components/home_intro';
import HomeDescription from '../../components/home_description';

export default class Home extends Component {
  state = {};
  // componentDidMount = () => {
  //   window.addEventListener('scroll', this.handleScroll);
  // };

  // componentWillUnmount = () => {
  //   window.removeEventListener('scroll', this.handleScroll);
  // };

  // handleScroll = (event) => {
  //   let scrollTop = event.srcElement.body.scrollTop,
  //     itemTranslate = Math.min(0, scrollTop / 3 - 60);

  //     console.log(window.scrollY);
  //   this.setState({
  //     transform: itemTranslate,
  //   });
  // };

  render() {
    return (
      <div>
        <Header />
        <div style={{ display: '', marginTop: 100 }}>
          <HomeIntro />
          <HomeDescription />
        </div>
      </div>
    );
  }
}
