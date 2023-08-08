import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';

const HoroscopeScreen = () => {
  const currentDate = new Date().toDateString();
  const zodiacSign = 'Leo';
  const horoscopePrediction = 'Today is a great day for you to take charge and make things happen. Your energy and enthusiasm will be high, and you will have the ability to inspire and motivate others. Take advantage of this positive energy and use it to accomplish your goals. Trust your instincts and follow your heart. You have the power to create the life you desire.';
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>{currentDate}</Text>
        <Text style={styles.zodiacSign}>{zodiacSign}</Text>
      </View>
      <View style={styles.content}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.prediction}>{horoscopePrediction}</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  zodiacSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  prediction: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24
  }
});
export default HoroscopeScreen;