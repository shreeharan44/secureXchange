import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const EconomyIcon = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32">
      <Circle cx="16" cy="16" r="12" fill="#ffffff" stroke="#8B3A62" strokeWidth="2" />
      <Path d="M 16 8 L 16 24 M 12 12 L 16 8 L 20 12 M 12 20 L 16 24 L 20 20" stroke="#8B3A62" strokeWidth="2" fill="none" />
      <Circle cx="16" cy="16" r="4" fill="#8B3A62" opacity="0.3" />
    </Svg>
  );
};

export default EconomyIcon;