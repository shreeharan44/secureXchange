import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CTAIcon from './svg/CTAIcon';

const CallToAction = () => {
  const handleGetStarted = () => {
    // Handle navigation to signup/login
    console.log('Get Started pressed');
  };

  return (
    <View style={styles.container}>
      <CTAIcon />
      
      <Text style={styles.title}>Ready to Transform Your Transactions?</Text>
      <Text style={styles.subtitle}>
        Join thousands of users who've already discovered the future of cross-border payments
      </Text>
      
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>50K+</Text>
          <Text style={styles.statLabel}>Active Users</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>$2M+</Text>
          <Text style={styles.statLabel}>Transferred</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>95%</Text>
          <Text style={styles.statLabel}>Fee Savings</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      
      <Text style={styles.disclaimer}>
        No hidden fees • Instant setup • 24/7 support
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 40,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#A14A76',
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#666666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 32,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#A14A76',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
  },
  button: {
    backgroundColor: '#A14A76',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 25,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#A14A76',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
  },
  disclaimer: {
    fontSize: 14,
    fontWeight: '400',
    color: '#999999',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default CallToAction;