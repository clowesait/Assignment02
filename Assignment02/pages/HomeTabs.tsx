import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking} from 'react-native';

type Tab = '' | 'Calgary' | 'Vancouver';

export default function HomeTabs() {
  const [activeTab, setActiveTab] = useState<Tab>('');

  // Content for each tab when state changes
  const content = (() => {
    if (activeTab === 'Calgary') {
      return (
        <ScrollView contentContainerStyle={styles.screen}>
          <Text style={styles.header}>Welcome to Calgary</Text>
          <Image source={require('../assets/Calgary.png')} style={styles.image}/>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.calgary.ca')}>
            <Text style={styles.link}>Go to calgary.ca</Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            Calgary is a vibrant city in southern Alberta, Canada, known for its blend of urban sophistication and Western heritage. 
            It's a major economic hub, particularly in the energy sector, and boasts a high quality of life with access to the Rocky Mountains. 
            The city is also recognized for its diverse population, strong arts and culture scene, and extensive pathway system.
          </Text>

        </ScrollView>
      );
    } else if (activeTab === 'Vancouver') {
      return (
        <ScrollView contentContainerStyle={styles.screen}>
          <Text style={styles.header}>Welcome to Vancouver</Text>
          <Image source={require('../assets/Vancouver.jpg')} style={styles.image}/>
          <TouchableOpacity onPress={() => Linking.openURL('https://vancouver.ca')}>
            <Text style={styles.link}>Go to vancouver.ca</Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            Vancouver is a vibrant coastal seaport city in British Columbia, Canada, known for its stunning natural beauty, diverse population, and thriving economy. 
            It's nestled between the Pacific Ocean and the Coast Mountains, offering residents and visitors access to both urban amenities and outdoor recreation. 
          </Text>

        </ScrollView>
      );
    } else {
      // Home
      return (
        <ScrollView contentContainerStyle={styles.screen}>
          <Text style={styles.header}>Welcome to My New App</Text>
          <Text style={styles.text}>
            Explore the beauty of Calgary and Vancouver, two of Canada's most vibrant cities.
          </Text>
        </ScrollView>
      );
    }
  })();

  return (
    <View style={styles.container}>
      <View style={styles.content}>{content}</View>

      <View style={styles.navBar}>
        <TouchableOpacity style={[styles.tab, activeTab === 'Calgary' && styles.activeTab]} onPress={() => setActiveTab('Calgary')}>
          <Text style={[styles.tabText, activeTab === 'Calgary' && styles.activeText]}>
            Calgary
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.tab, activeTab === 'Vancouver' && styles.activeTab]} onPress={() => setActiveTab('Vancouver')}>
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
  link: {
    marginTop: 8,
    fontSize: 16,
    color: '#1E90FF',
    textDecorationLine: 'underline'
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
