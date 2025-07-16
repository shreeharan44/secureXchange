import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TouristSection from './components/TouristSection';
import TransactionModes from './components/TransactionModes';
import CallToAction from './components/CallToAction';

const App = () => {
  const [activeMode, setActiveMode] = useState('balanced');

  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <HeroSection />
        <FeaturesSection />
        <TouristSection />
        <TransactionModes 
          activeMode={activeMode}
          setActiveMode={setActiveMode}
        />
        <CallToAction />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
});

export default App;