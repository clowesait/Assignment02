import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import CityInfo from '../components/CityInfo';
import CityLink from '../components/CityLink';

type Tab = '' | 'Calgary' | 'Vancouver';

export default function HomeTabs() {
  const [activeTab, setActiveTab] = useState<Tab>('');

  const renderContent = () => {
    switch (activeTab) {
      case 'Calgary':
        return (
          <ScrollView contentContainerStyle={styles.screen}>
            <Text style={styles.header}>Welcome to Calgary</Text>
            <Image source={require('../assets/Calgary.png')} style={styles.image} />
            <CityLink link="https://www.calgary.ca" />
            <CityInfo city="Calgary" />
          </ScrollView>
        );
      case 'Vancouver':
        return (
          <ScrollView contentContainerStyle={styles.screen}>
            <Text style={styles.header}>Welcome to Vancouver</Text>
            <Image source={require('../assets/Vancouver.jpg')} style={styles.image} />
            <CityLink link="https://vancouver.ca" />
            <CityInfo city="Vancouver" />
          </ScrollView>
        );
      default:
        return (
          <ScrollView contentContainerStyle={styles.screen}>
            <Text style={styles.header}>Welcome to My New App</Text>
            <Text style={styles.text}>
              Explore the beauty of Calgary and Vancouver, two of Canada's most vibrant cities.
            </Text>
          </ScrollView>
        );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>{renderContent()}</View>
      <View style={styles.navBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Calgary' && styles.activeTab]}
          onPress={() => setActiveTab('Calgary')}>
          <Text style={[styles.tabText, activeTab === 'Calgary' && styles.activeText]}>
            Calgary
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'Vancouver' && styles.activeTab]}
          onPress={() => setActiveTab('Vancouver')}>
          <Text style={[styles.tabText, activeTab === 'Vancouver' && styles.activeText]}>
            Vancouver
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1 },

  screen: {
    padding: 16,
    alignItems: 'center'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center'
  },
  navBar: {
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: '#ccc',
    backgroundColor: '#fafafa',
    height: 60
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeTab: {
    backgroundColor: '#e0e0e0'
  },
  tabText: {
    fontSize: 16,
    color: '#555'
  },
  activeText: {
    color: '#000'
  },
});
