import React from "react";
import { SafeAreaView, Text, TouchableOpacity, FlatList, StyleSheet, Image } from "react-native";
const zodiacSigns = [{
  name: "Aries",
  symbol: "♈",
  image: "https://tinyurl.com/42evm3m3"
}, {
  name: "Taurus",
  symbol: "♉",
  image: "https://tinyurl.com/42evm3m3"
}, {
  name: "Gemini",
  symbol: "♊",
  image: "https://tinyurl.com/42evm3m3"
}, {
  name: "Cancer",
  symbol: "♋",
  image: "https://tinyurl.com/42evm3m3"
}, {
  name: "Leo",
  symbol: "♌",
  image: "https://tinyurl.com/42evm3m3"
}, {
  name: "Virgo",
  symbol: "♍",
  image: "https://tinyurl.com/42evm3m3"
}, {
  name: "Libra",
  symbol: "♎",
  image: "https://tinyurl.com/42evm3m3"
}, {
  name: "Scorpio",
  symbol: "♏",
  image: "https://tinyurl.com/42evm3m3"
}, {
  name: "Sagittarius",
  symbol: "♐",
  image: "https://tinyurl.com/42evm3m3"
}, {
  name: "Capricorn",
  symbol: "♑",
  image: "https://tinyurl.com/42evm3m3"
}, {
  name: "Aquarius",
  symbol: "♒",
  image: "https://tinyurl.com/42evm3m3"
}, {
  name: "Pisces",
  symbol: "♓",
  image: "https://tinyurl.com/42evm3m3"
}];

const ZodiacSignsScreen = ({
  navigation
}) => {
  const renderZodiacSign = ({
    item
  }) => <TouchableOpacity style={styles.zodiacSignContainer} onPress={() => navigation.navigate("ScreenA13", {
    sign: item
  })}>
      <Image source={{
      uri: item.image
    }} style={styles.zodiacSignImage} />
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
    backgroundColor: "#fff",
    paddingHorizontal: 16
  },
  zodiacSignContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 12
  },
  zodiacSignImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8
  },
  zodiacSignName: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 8
  },
  zodiacSignSymbol: {
    fontSize: 18
  }
});
export default ZodiacSignsScreen;