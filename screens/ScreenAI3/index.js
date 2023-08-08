import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const ZodiacDetailScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Zodiac Sign</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.symbol} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.name}>Zodiac Sign Name</Text>
        <Text style={styles.element}>Element: Element Name</Text>
        <Text style={styles.rulingPlanet}>Ruling Planet: Planet Name</Text>
        <Text style={styles.compatibility}>Compatibility: Compatible Sign</Text>
        <Text style={styles.description}>Personality Traits: Brief Description</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DailyHoroscope')}>
        <Text style={styles.buttonText}>Go to Daily Horoscope</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  symbol: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  element: {
    fontSize: 16,
    marginBottom: 5
  },
  rulingPlanet: {
    fontSize: 16,
    marginBottom: 5
  },
  compatibility: {
    fontSize: 16,
    marginBottom: 5
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default ZodiacDetailScreen;