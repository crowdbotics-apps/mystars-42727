import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

const HoroscopeScreen = () => {
  const [activeTab, setActiveTab] = useState('week');

  const handleTabPress = tab => {
    setActiveTab(tab);
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Horoscope</Text>
      </View>
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={[styles.tab, activeTab === 'week' && styles.activeTab]} onPress={() => handleTabPress('week')}>
          <Text style={[styles.tabText, activeTab === 'week' && styles.activeTabText]}>Week</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, activeTab === 'month' && styles.activeTab]} onPress={() => handleTabPress('month')}>
          <Text style={[styles.tabText, activeTab === 'month' && styles.activeTabText]}>Month</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, activeTab === 'year' && styles.activeTab]} onPress={() => handleTabPress('year')}>
          <Text style={[styles.tabText, activeTab === 'year' && styles.activeTabText]}>Year</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.dateRange}>Date Range: September 23 - October 22</Text>
        <Text style={styles.zodiacSign}>Zodiac Sign: Libra</Text>
        {activeTab === 'week' && <View>
            <Text style={styles.predictionTitle}>Weekly Prediction</Text>
            <Text style={styles.predictionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </View>}
        {activeTab === 'month' && <View>
            <Text style={styles.predictionTitle}>Monthly Prediction</Text>
            <Text style={styles.predictionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </View>}
        {activeTab === 'year' && <View>
            <Text style={styles.predictionTitle}>Yearly Prediction</Text>
            <Text style={styles.predictionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </View>}
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20
  },
  activeTab: {
    backgroundColor: '#333'
  },
  tabText: {
    fontSize: 16,
    color: '#333'
  },
  activeTabText: {
    color: '#fff'
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dateRange: {
    fontSize: 18,
    marginBottom: 8
  },
  zodiacSign: {
    fontSize: 18,
    marginBottom: 16
  },
  predictionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  },
  predictionText: {
    fontSize: 16,
    textAlign: 'center'
  }
});
export default HoroscopeScreen;