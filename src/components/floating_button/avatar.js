import React from 'react';
import styled from 'styled-components';
import aivril from '../../assets/images/aivril.jpg';

const AvatarContainer = styled.div`
  margin-left: 20px;
  width: 42px;
  height: 42px;
  border-radius: 20px;
  background-color: #fcadee;
`;
const AvatarImage = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 20px;
`;

const Avatar = () => (
  <AvatarContainer>
    <AvatarImage src={aivril} alt="Logo" />
  </AvatarContainer>
);

export default Avatar;
