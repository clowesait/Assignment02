import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

interface CityLinkProps {
  link: string;
}

export default function CityLink({ link }: CityLinkProps) {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(link)}>
      <Text style={styles.link}>Go to city page</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 8,
    fontSize: 16,
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
});
