import React, { Component } from 'react';
import DownloadDescription from '../../components/download_description/download_description';
import DownloadForm from '../../components/download_form/download_form';
import Logo from '../../components/logo';

const imgUrl = 'http://www.v3wall.com/wallpaper/1920_1080/1104/1920_1080_20110409110510430234.jpg';
const divStyle = {
  height: window.innerHeight,
  width: window.innerWidth,
  backgroundImage: `url(${imgUrl})`,
  backgroundRepeat: 'no-repeat',
};
const outerDiv = {
  height: window.innerHeight,
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: window.innerWidth * (1 / 6),
  backgroundColor: 'rgba(102,153,255, 0.5)',
};
const formStyle = {
  paddingLeft: window.innerWidth * (1 / 12),
};

class Download extends Component {
  state = {};
  render() {
    return (
      <div style={divStyle}>
        <div style={outerDiv}>
          <Logo />
          <div style={formStyle}>
            <DownloadDescription />
            <DownloadForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Download;
