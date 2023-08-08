import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ZodiacScreen = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [zodiacSign, setZodiacSign] = useState("");

  const handleValidateDate = () => {
    const isValid = validateDate(day, month, year);

    if (isValid) {
      setErrorMessage("");
      const sign = getZodiacSign(day, month);
      setZodiacSign(sign);
    } else {
      setErrorMessage("Invalid date");
      setZodiacSign("");
    }
  };

  const validateDate = (day, month, year) => {
    const isValidDay = /^\d{1,2}$/.test(day);
    const isValidMonth = /^\d{1,2}$/.test(month);
    const isValidYear = /^\d{4}$/.test(year);

    if (!isValidDay || !isValidMonth || !isValidYear) {
      return false;
    }

    const numericDay = parseInt(day, 10);
    const numericMonth = parseInt(month, 10);
    const numericYear = parseInt(year, 10);

    if (numericMonth < 1 || numericMonth > 12) {
      return false;
    }

    if (numericDay < 1 || numericDay > 31) {
      return false;
    }

    if ((numericMonth === 4 || numericMonth === 6 || numericMonth === 9 || numericMonth === 11) && numericDay > 30) {
      return false;
    }

    if (numericMonth === 2) {
      if (numericDay > 29) {
        return false;
      }

      if (numericYear % 4 === 0 && numericYear % 100 !== 0 || numericYear % 400 === 0 && numericYear % 100 === 0) {
        if (numericDay > 29) {
          return false;
        }
      } else {
        if (numericDay > 28) {
          return false;
        }
      }
    }

    return true;
  };

  const getZodiacSign = (day, month) => {
    const numericDay = parseInt(day, 10);
    const numericMonth = parseInt(month, 10);

    if (numericMonth === 1 && numericDay >= 20 || numericMonth === 2 && numericDay <= 18) {
      return "Aquarius";
    } else if (numericMonth === 2 && numericDay >= 19 || numericMonth === 3 && numericDay <= 20) {
      return "Pisces";
    } else if (numericMonth === 3 && numericDay >= 21 || numericMonth === 4 && numericDay <= 19) {
      return "Aries";
    } else if (numericMonth === 4 && numericDay >= 20 || numericMonth === 5 && numericDay <= 20) {
      return "Taurus";
    } else if (numericMonth === 5 && numericDay >= 21 || numericMonth === 6 && numericDay <= 20) {
      return "Gemini";
    } else if (numericMonth === 6 && numericDay >= 21 || numericMonth === 7 && numericDay <= 22) {
      return "Cancer";
    } else if (numericMonth === 7 && numericDay >= 23 || numericMonth === 8 && numericDay <= 22) {
      return "Leo";
    } else if (numericMonth === 8 && numericDay >= 23 || numericMonth === 9 && numericDay <= 22) {
      return "Virgo";
    } else if (numericMonth === 9 && numericDay >= 23 || numericMonth === 10 && numericDay <= 22) {
      return "Libra";
    } else if (numericMonth === 10 && numericDay >= 23 || numericMonth === 11 && numericDay <= 21) {
      return "Scorpio";
    } else if (numericMonth === 11 && numericDay >= 22 || numericMonth === 12 && numericDay <= 21) {
      return "Sagittarius";
    } else {
      return "Capricorn";
    }
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Zodiac Sign</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Day" keyboardType="numeric" value={day} onChangeText={setDay} />
        <TextInput style={styles.input} placeholder="Month" keyboardType="numeric" value={month} onChangeText={setMonth} />
        <TextInput style={styles.input} placeholder="Year" keyboardType="numeric" value={year} onChangeText={setYear} />
        <Button title="Submit" onPress={handleValidateDate} />
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        {zodiacSign ? <Text style={styles.zodiac}>{zodiacSign}</Text> : null}
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  inputContainer: {
    width: "80%",
    alignItems: "center"
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  error: {
    color: "red",
    marginTop: 10
  },
  zodiac: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10
  }
});
export default ZodiacScreen;