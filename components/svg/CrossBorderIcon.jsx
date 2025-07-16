import React from 'react';
import Svg, { Path, Circle, Line } from 'react-native-svg';

const CrossBorderIcon = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32">
      <Circle cx="8" cy="12" r="6" fill="#ffffff" stroke="#A14A76" strokeWidth="2" />
      <Circle cx="24" cy="20" r="6" fill="#ffffff" stroke="#A14A76" strokeWidth="2" />
      <Line x1="8" y1="12" x2="24" y2="20" stroke="#A14A76" strokeWidth="2" />
      <Path d="M 18 16 L 22 14 L 20 18 Z" fill="#A14A76" />
    </Svg>
  );
};

export default CrossBorderIcon;