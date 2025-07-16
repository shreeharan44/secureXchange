import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const SecurityIcon = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32">
      <Path
        d="M 16 4 L 8 8 L 8 16 C 8 22 16 28 16 28 C 16 28 24 22 24 16 L 24 8 L 16 4 Z"
        fill="#ffffff"
        stroke="#A14A76"
        strokeWidth="2"
      />
      <Circle cx="16" cy="16" r="4" fill="#A14A76" />
      <Path d="M 14 16 L 15.5 17.5 L 18 14.5" stroke="#ffffff" strokeWidth="2" fill="none" />
    </Svg>
  );
};

export default SecurityIcon;