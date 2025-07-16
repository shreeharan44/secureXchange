import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Circle, Polygon } from 'react-native-svg';

const GeometricLogo = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Svg width="80" height="80" viewBox="0 0 80 80">
        {/* Background Circle */}
        <Circle
          cx="40"
          cy="40"
          r="38"
          fill="rgba(255, 255, 255, 0.1)"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="2"
        />
        
        {/* Main Diamond Shape */}
        <Polygon
          points="40,10 60,30 40,50 20,30"
          fill="#E2C6BF"
          stroke="#ffffff"
          strokeWidth="2"
        />
        
        {/* Inner Diamond */}
        <Polygon
          points="40,18 52,30 40,42 28,30"
          fill="#ffffff"
          opacity="0.9"
        />
        
        {/* Center Circle */}
        <Circle
          cx="40"
          cy="30"
          r="8"
          fill="#A14A76"
        />
        
        {/* Exchange Arrows */}
        <Path
          d="M 32 60 L 38 55 L 35 55 L 35 50 L 29 50 L 29 55 L 26 55 L 32 60 Z"
          fill="#ffffff"
        />
        <Path
          d="M 48 55 L 42 60 L 45 60 L 45 65 L 51 65 L 51 60 L 54 60 L 48 55 Z"
          fill="#ffffff"
        />
      </Svg>
    </View>
  );
};

export default GeometricLogo;