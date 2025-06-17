import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import CityInfo from '../components/CityInfo';
import CityLink from '../components/CityLink';
import AppStyles from '../components/AppStyles';

type Tab = '' | 'Calgary' | 'Vancouver';

export default function HomeTabs() {
  const [activeTab, setActiveTab] = useState<Tab>('');

  const renderContent = () => {
    switch (activeTab) {
      case 'Calgary':
        return (
          <ScrollView contentContainerStyle={AppStyles.screen}>
            <Text style={AppStyles.header}>Welcome to Calgary</Text>
            <Image source={require('../assets/Calgary.png')} style={AppStyles.image} />
            <CityLink link="https://www.calgary.ca" />
            <CityInfo city="Calgary" />
            <TouchableOpacity style={AppStyles.backButton} onPress={() => setActiveTab('')}>
              <Text style={AppStyles.backButtonText}>Back to Home</Text>
            </TouchableOpacity>
          </ScrollView>
        );
      case 'Vancouver':
        return (
          <ScrollView contentContainerStyle={AppStyles.screen}>
            <Text style={AppStyles.header}>Welcome to Vancouver</Text>
            <Image source={require('../assets/Vancouver.jpg')} style={AppStyles.image} />
            <CityLink link="https://vancouver.ca" />
            <CityInfo city="Vancouver" />
            <TouchableOpacity style={AppStyles.backButton} onPress={() => setActiveTab('')}>
              <Text style={AppStyles.backButtonText}>Back to Home</Text>
            </TouchableOpacity>
          </ScrollView>
        );
      default:
        return (
          <ScrollView contentContainerStyle={AppStyles.screen}>
            <Text style={AppStyles.header}>Welcome to My New App</Text>
            <View style={AppStyles.imageRow}>
              <Image source={require('../assets/Calgary.png')} style={AppStyles.thumbnail} />
              <Image source={require('../assets/Vancouver.jpg')} style={AppStyles.thumbnail} />
            </View>
            <Text style={AppStyles.text}>
              Explore the beauty of Calgary and Vancouver, two of Canada's most vibrant cities.
            </Text>
          </ScrollView>
        );
    }
  };

  return (
    <View style={AppStyles.container}>
      <View style={AppStyles.content}>{renderContent()}</View>
      <View style={AppStyles.navBar}>
        <TouchableOpacity
          style={[AppStyles.tab, activeTab === 'Calgary' && AppStyles.activeTab]}
          onPress={() => setActiveTab('Calgary')}>
          <Text style={[AppStyles.tabText, activeTab === 'Calgary' && AppStyles.activeText]}>
            Calgary
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[AppStyles.tab, activeTab === 'Vancouver' && AppStyles.activeTab]}
          onPress={() => setActiveTab('Vancouver')}>
          <Text style={[AppStyles.tabText, activeTab === 'Vancouver' && AppStyles.activeText]}>
            Vancouver
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
