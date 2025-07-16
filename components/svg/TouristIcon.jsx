import React from 'react';
import Svg, { Path, Circle, Rect } from 'react-native-svg';

const TouristIcon = () => {
  return (
    <Svg width="64" height="64" viewBox="0 0 64 64">
      {/* Backpack */}
      <Path
        d="M 20 20 L 20 50 L 44 50 L 44 20 C 44 16 40 12 36 12 L 28 12 C 24 12 20 16 20 20 Z"
        fill="#A14A76"
      />
      <Rect x="22" y="22" width="20" height="4" fill="#E2C6BF" />
      <Rect x="22" y="30" width="20" height="4" fill="#E2C6BF" />
      
      {/* Person */}
      <Circle cx="32" cy="8" r="4" fill="#E2C6BF" />
      <Path d="M 26 16 L 26 28 L 30 28 L 30 40 L 34 40 L 34 28 L 38 28 L 38 16 Z" fill="#8B3A62" />
      
      {/* Map */}
      <Rect x="48" y="24" width="12" height="8" fill="#ffffff" stroke="#A14A76" strokeWidth="1" />
      <Path d="M 50 26 L 52 28 L 54 26 L 56 28 L 58 26" stroke="#A14A76" strokeWidth="1" fill="none" />
    </Svg>
  );
};

export default TouristIcon;