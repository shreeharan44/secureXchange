import React from 'react';
import Svg, { Path, Circle, Polygon } from 'react-native-svg';

const CTAIcon = () => {
  return (
    <Svg width="80" height="80" viewBox="0 0 80 80">
      {/* Outer ring */}
      <Circle cx="40" cy="40" r="35" fill="none" stroke="#E2C6BF" strokeWidth="2" opacity="0.5" />
      
      {/* Main shape */}
      <Polygon
        points="40,15 60,25 55,45 40,55 25,45 20,25"
        fill="#A14A76"
        opacity="0.8"
      />
      
      {/* Inner elements */}
      <Circle cx="40" cy="40" r="15" fill="#ffffff" opacity="0.9" />
      <Circle cx="40" cy="40" r="8" fill="#A14A76" />
      
      {/* Decorative elements */}
      <Circle cx="25" cy="25" r="3" fill="#E2C6BF" opacity="0.6" />
      <Circle cx="55" cy="25" r="3" fill="#E2C6BF" opacity="0.6" />
      <Circle cx="40" cy="65" r="3" fill="#E2C6BF" opacity="0.6" />
    </Svg>
  );
};

export default CTAIcon;