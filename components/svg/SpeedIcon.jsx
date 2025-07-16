import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const SpeedIcon = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32">
      <Circle cx="16" cy="18" r="12" fill="#ffffff" stroke="#A14A76" strokeWidth="2" />
      <Path d="M 8 18 L 12 14 L 16 18 L 20 14 L 24 18" stroke="#A14A76" strokeWidth="2" fill="none" />
      <Circle cx="16" cy="18" r="2" fill="#A14A76" />
      <Path d="M 12 8 L 16 4 L 20 8" stroke="#A14A76" strokeWidth="2" fill="none" />
    </Svg>
  );
};

export default SpeedIcon;