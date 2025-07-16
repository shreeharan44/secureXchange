import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FeatureCard from './FeatureCard';
import CrossBorderIcon from './svg/CrossBorderIcon';
import SecurityIcon from './svg/SecurityIcon';
import SpeedIcon from './svg/SpeedIcon';

const FeaturesSection = () => {
  const features = [
    {
      icon: <CrossBorderIcon />,
      title: 'Cross-Border Excellence',
      description: 'Send money anywhere in the world with fees up to 95% lower than traditional methods',
      color: '#A14A76',
    },
    {
      icon: <SecurityIcon />,
      title: 'Bank-Grade Security',
      description: 'Advanced encryption and multi-layer security protocols protect every transaction',
      color: '#8B3A62',
    },
    {
      icon: <SpeedIcon />,
      title: 'Lightning Fast',
      description: 'Complete transactions in seconds, not days. Real-time processing worldwide',
      color: '#A14A76',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Why Choose SecureXchange?</Text>
      <Text style={styles.subtitle}>
        Experience the future of financial transactions
      </Text>
      
      <View style={styles.featuresGrid}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            color={feature.color}
            delay={index * 200}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 40,
    backgroundColor: '#F5F1F0',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#A14A76',
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#666666',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 22,
  },
  featuresGrid: {
    gap: 20,
  },
});

export default FeaturesSection;