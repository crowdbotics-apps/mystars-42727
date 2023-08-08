import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ZodiacScreen = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [zodiacSign, setZodiacSign] = useState('');

  const handleValidateDate = () => {
    const isValid = validateDate(day, month, year);

    if (isValid) {
      setErrorMessage('');
      const sign = getZodiacSign(day, month);
      setZodiacSign(sign);
    } else {
      setErrorMessage('Invalid date');
      setZodiacSign('');
    }
  };

  const validateDate = (day, month, year) => {
    // Date validation logic here
    return true; // Placeholder logic, replace with actual validation
  };

  const getZodiacSign = (day, month) => {
    // Zodiac sign calculation logic here
    return 'Leo'; // Placeholder logic, replace with actual calculation
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center'
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  error: {
    color: 'red',
    marginTop: 10
  },
  zodiac: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  }
});
export default ZodiacScreen;