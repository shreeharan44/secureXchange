import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TouristIcon from './svg/TouristIcon';
import TouristFeatureCard from './TouristFeatureCard';

const TouristSection = () => {
  const touristFeatures = [
    {
      icon: '🎯',
      title: 'Simplified Interface',
      description: 'User-friendly design built for travelers',
    },
    {
      icon: '🌍',
      title: 'Multi-Language Support',
      description: 'Available in 25+ languages worldwide',
    },
    {
      icon: '📱',
      title: 'Offline Payments',
      description: 'Works without internet connection',
    },
    {
      icon: '💰',
      title: 'Smart Budgeting',
      description: 'AI-powered expense tracking',
    },
    {
      icon: '🏪',
      title: 'Local Merchants',
      description: 'Discover crypto-accepting businesses',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouristIcon />
        <Text style={styles.title}>Tourist Mode</Text>
        <Text style={styles.subtitle}>
          Travel the world with confidence and ease
        </Text>
      </View>
      
      <View style={styles.featuresContainer}>
        {touristFeatures.map((feature, index) => (
          <TouristFeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={index * 150}
          />
        ))}
      </View>
      
      <View style={styles.highlight}>
        <Text style={styles.highlightTitle}>Perfect for Travelers</Text>
        <Text style={styles.highlightText}>
          Designed specifically for tourists and international travelers who need secure, affordable transactions anywhere in the world.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 40,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#A14A76',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#666666',
    textAlign: 'center',
    lineHeight: 22,
  },
  featuresContainer: {
    gap: 16,
    marginBottom: 32,
  },
  highlight: {
    backgroundColor: '#A14A76',
    borderRadius: 20,
    padding: 24,
    marginTop: 16,
  },
  highlightTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 12,
    textAlign: 'center',
  },
  highlightText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#E2C6BF',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default TouristSection;