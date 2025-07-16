import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import GeometricLogo from './svg/GeometricLogo';
import FloatingElements from './svg/FloatingElements';

const HeroSection = () => {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.8);

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 100,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <FloatingElements />
      
      <Animated.View 
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          }
        ]}
      >
        <GeometricLogo />
        
        <Text style={styles.appName}>SecureXchange</Text>
        <Text style={styles.tagline}>Change Securely</Text>
        
        <Text style={styles.description}>
          Revolutionary cross-border transactions with the lowest fees ever launched
        </Text>
        
        <View style={styles.highlight}>
          <Text style={styles.highlightText}>🚀 Up to 95% lower fees</Text>
          <Text style={styles.highlightText}>⚡ Instant transactions</Text>
          <Text style={styles.highlightText}>🌍 Global reach</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    background: 'linear-gradient(135deg, #A14A76 0%, #8B3A62 100%)',
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    alignItems: 'center',
    zIndex: 2,
  },
  appName: {
    fontSize: 32,
    fontWeight: '800',
    color: '#A14A76',
    marginTop: 24,
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: -1,
  },
  tagline: {
    fontSize: 16,
    fontWeight: '500',
    color: '#E2C6BF',
    marginBottom: 24,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    color: '#A14A76',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 32,
    paddingHorizontal: 8,
  },
  highlight: {
    backgroundColor: 'rgba(112, 32, 32, 0.1)',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  highlightText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#A14A76',
    marginBottom: 8,
    textAlign: 'center',
  },
});

export default HeroSection;