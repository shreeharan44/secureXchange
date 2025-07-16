import React from 'react';
import Svg, { Path, Circle, Line } from 'react-native-svg';

const BalancedIcon = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32">
      <Circle cx="16" cy="16" r="12" fill="#ffffff" stroke="#A14A76" strokeWidth="2" />
      <Line x1="8" y1="16" x2="24" y2="16" stroke="#A14A76" strokeWidth="2" />
      <Circle cx="12" cy="12" r="3" fill="#A14A76" opacity="0.5" />
      <Circle cx="20" cy="20" r="3" fill="#A14A76" opacity="0.5" />
      <Path d="M 16 8 L 16 24" stroke="#A14A76" strokeWidth="1" opacity="0.5" />
    </Svg>
  );
};

export default BalancedIcon;