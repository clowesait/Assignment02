import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import AppStyles from '../components/AppStyles';
import CityLink from '../components/CityLink';
import CityInfo from '../components/CityInfo';


export default function Vancouver() {
  return (
        <ScrollView contentContainerStyle={AppStyles.screen}>
      <Text style={AppStyles.header}>Welcome to Vancouver</Text>
      <Image source={require('../assets/Vancouver.jpg')} style={AppStyles.image} />
      <CityLink link="https://vancouver.ca" />
      <CityInfo city="Vancouver" />
    </ScrollView>
  );
}