import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ModeCard = ({ mode, isActive, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isActive && styles.activeContainer,
      ]}
      onPress={onPress}
    >
      <View style={styles.header}>
        <View style={[styles.iconContainer, { backgroundColor: mode.color }]}>
          {mode.icon}
        </View>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, isActive && styles.activeTitle]}>
            {mode.title}
          </Text>
          <Text style={styles.description}>{mode.description}</Text>
        </View>
      </View>
      
      <View style={styles.details}>
        <View style={styles.metric}>
          <Text style={styles.metricLabel}>Fee</Text>
          <Text style={[styles.metricValue, { color: mode.color }]}>
            {mode.fee}
          </Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.metricLabel}>Time</Text>
          <Text style={[styles.metricValue, { color: mode.color }]}>
            {mode.time}
          </Text>
        </View>
      </View>
      
      <View style={styles.benefits}>
        {mode.benefits.map((benefit, index) => (
          <View key={index} style={styles.benefitItem}>
            <Text style={styles.benefitText}>✓ {benefit}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    borderWidth: 2,
    borderColor: '#E2C6BF',
  },
  activeContainer: {
    borderColor: '#A14A76',
    elevation: 4,
    shadowColor: '#A14A76',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 4,
  },
  activeTitle: {
    color: '#A14A76',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 18,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  metric: {
    flex: 1,
    alignItems: 'center',
  },
  metricLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 20,
    fontWeight: '800',
  },
  benefits: {
    gap: 8,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  benefitText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
  },
});

export default ModeCard;