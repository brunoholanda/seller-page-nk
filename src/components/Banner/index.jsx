import React from 'react';
import banner from '../../assets/banner-01.jpg';
import { StyledBanner } from './styles';

const Banner = () => {
  return (
    <StyledBanner>
      <img src={banner} alt="" />
      <p>Os melhores eletrônicos 100% testados e aprovados!</p>
    </StyledBanner>
  );
};

export default Banner;
