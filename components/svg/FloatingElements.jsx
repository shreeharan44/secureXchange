import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Polygon, Path } from 'react-native-svg';

const FloatingElements = () => {
  return (
    <View style={styles.container}>
      {/* Floating Element 1 */}
      <View style={[styles.element, styles.element1]}>
        <Svg width="30" height="30" viewBox="0 0 30 30">
          <Circle cx="15" cy="15" r="12" fill="rgba(255, 255, 255, 0.1)" />
          <Circle cx="15" cy="15" r="6" fill="rgba(226, 198, 191, 0.3)" />
        </Svg>
      </View>
      
      {/* Floating Element 2 */}
      <View style={[styles.element, styles.element2]}>
        <Svg width="25" height="25" viewBox="0 0 25 25">
          <Polygon
            points="12.5,2 22,8.5 22,16.5 12.5,23 3,16.5 3,8.5"
            fill="rgba(255, 255, 255, 0.15)"
          />
        </Svg>
      </View>
      
      {/* Floating Element 3 */}
      <View style={[styles.element, styles.element3]}>
        <Svg width="20" height="20" viewBox="0 0 20 20">
          <Path
            d="M 10 2 L 18 10 L 10 18 L 2 10 Z"
            fill="rgba(226, 198, 191, 0.2)"
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  element: {
    position: 'absolute',
  },
  element1: {
    top: 100,
    left: 30,
    animation: 'float 3s ease-in-out infinite',
  },
  element2: {
    top: 150,
    right: 40,
    animation: 'float 3s ease-in-out infinite 1s',
  },
  element3: {
    bottom: 100,
    left: 50,
    animation: 'float 3s ease-in-out infinite 2s',
  },
});

export default FloatingElements;