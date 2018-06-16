import React from 'react';
import LogoImage from '../assets/images/ie_logo_PNG27.png';
import IsScale from '../utils/is-scale';

const imagestyle = {
  width: IsScale ? 200 : 60,
  height: IsScale ? 200 : 60,
};

const Logo = () => <img style={imagestyle} src={LogoImage} alt="Logo" />;
export default Logo;
