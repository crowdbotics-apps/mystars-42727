import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
const zodiacSigns = [{
  name: 'Aries',
  symbol: '♈'
}, {
  name: 'Taurus',
  symbol: '♉'
}, {
  name: 'Gemini',
  symbol: '♊'
}, {
  name: 'Cancer',
  symbol: '♋'
}, {
  name: 'Leo',
  symbol: '♌'
}, {
  name: 'Virgo',
  symbol: '♍'
}, {
  name: 'Libra',
  symbol: '♎'
}, {
  name: 'Scorpio',
  symbol: '♏'
}, {
  name: 'Sagittarius',
  symbol: '♐'
}, {
  name: 'Capricorn',
  symbol: '♑'
}, {
  name: 'Aquarius',
  symbol: '♒'
}, {
  name: 'Pisces',
  symbol: '♓'
}];

const ZodiacSignsScreen = ({
  navigation
}) => {
  const renderZodiacSign = ({
    item
  }) => <TouchableOpacity style={styles.zodiacSignContainer} onPress={() => navigation.navigate('SignDetails', {
    sign: item
  })}>
      <Text style={styles.zodiacSignName}>{item.name}</Text>
      <Text style={styles.zodiacSignSymbol}>{item.symbol}</Text>
    </TouchableOpacity>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={zodiacSigns} renderItem={renderZodiacSign} keyExtractor={item => item.name} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16
  },
  zodiacSignContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  zodiacSignName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8
  },
  zodiacSignSymbol: {
    fontSize: 18
  }
});
export default ZodiacSignsScreen;