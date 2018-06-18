import React, { Component } from 'react';
import Header from '../../components/header';
import HomeIntro from '../../components/home_intro';
import HomeDescription from '../../components/home_description';
import FloatingButton from '../../components/floating_button/index';
import aivril from '../../assets/images/aivril.jpg';


export default class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        {/* <div style={{ position: 'fixed', bottom: 50, right: 50, display: 'flex' }}>
          <FloatingButton>Got questions? Visit the Help Center.</FloatingButton>
          <div style={{ marginLeft: 20, width: 42, height: 42, borderRadius: 20, backgroundColor: '#fcadee'}}>
            <img style={{width: 42, height: 42, borderRadius: 20 }} src={aivril} alt="Logo" />;
          </div>
        </div> */}
        <FloatingButton />

        <Header />
        <div style={{ display: '', marginTop: 100 }}>
          <HomeIntro />
          <HomeDescription />
        </div>
      </div>
    );
  }
}
