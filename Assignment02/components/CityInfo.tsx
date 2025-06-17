import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface CityInfoProps {
  city: 'Calgary' | 'Vancouver';
}

export default function CityInfo({ city }: CityInfoProps) {
  const descriptions: Record<string, string> = {
    Calgary:
      `Calgary is a vibrant city in southern Alberta, Canada, known for its blend of urban sophistication and Western heritage. 
      It's a major economic hub, particularly in the energy sector, and boasts a high quality of life with access to the Rocky Mountains. 
      The city is also recognized for its diverse population, strong arts and culture scene, and extensive pathway system.`,
    Vancouver:
      `Vancouver is a vibrant coastal seaport city in British Columbia, Canada, known for its stunning natural beauty, diverse population, and thriving economy. 
      It's nestled between the Pacific Ocean and the Coast Mountains, offering residents and visitors access to both urban amenities and outdoor recreation.`
  };

  return <Text style={styles.text}>{descriptions[city]}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 10,
  },
});
