import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import CityInfo from '../components/CityInfo';
import AppStyles from '../components/AppStyles';
import CityLink from '../components/CityLink';
import { Link } from 'expo-router';

export default function Calgary() {
  return (
    <ScrollView contentContainerStyle={AppStyles.screen}>
      <Text style={AppStyles.header}>Welcome to Vancouver</Text>
      <Image source={require('../assets/Calgary.png')} style={AppStyles.image} />
      <CityLink link="https://calgary.ca" />
      <CityInfo city="Calgary" />
      <Link href="/" style={AppStyles.backLink}>
        ← Back Home
      </Link>
    </ScrollView>
  );
  
}
