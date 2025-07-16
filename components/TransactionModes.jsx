import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ModeCard from './ModeCard';
import EconomyIcon from './svg/EconomyIcon';
import BalancedIcon from './svg/BalancedIcon';

const TransactionModes = ({ activeMode, setActiveMode }) => {
  const modes = [
    {
      id: 'economy',
      title: 'Economy Mode',
      icon: <EconomyIcon />,
      fee: '0.1%',
      time: '2-5 minutes',
      description: 'Lowest fees for non-urgent transfers',
      benefits: ['Minimal fees', 'Cost-effective', 'Bulk transfers'],
      color: '#8B3A62',
    },
    {
      id: 'balanced',
      title: 'Balanced Mode',
      icon: <BalancedIcon />,
      fee: '0.5%',
      time: '30 seconds',
      description: 'Perfect balance of speed and cost',
      benefits: ['Fast processing', 'Moderate fees', 'Most popular'],
      color: '#A14A76',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Mode</Text>
      <Text style={styles.subtitle}>
        Select the perfect balance between speed and cost
      </Text>
      
      <View style={styles.modesContainer}>
        {modes.map((mode) => (
          <ModeCard
            key={mode.id}
            mode={mode}
            isActive={activeMode === mode.id}
            onPress={() => setActiveMode(mode.id)}
          />
        ))}
      </View>
      
      <View style={styles.comparisonNote}>
        <Text style={styles.noteText}>
          💡 Both modes offer significant savings compared to traditional banking (typically 3-8% fees)
        </Text>
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
  modesContainer: {
    gap: 20,
    marginBottom: 24,
  },
  comparisonNote: {
    backgroundColor: '#E2C6BF',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  },
  noteText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#A14A76',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default TransactionModes;