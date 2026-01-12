import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

type HomeTabsProps = {
  userFullName: string;
  setIsSignedIn: (signedIn: boolean) => void;
};

export default function HomeTabs({ userFullName, setIsSignedIn }: HomeTabsProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcome}>Welcome, {userFullName}</Text>
        <Text style={styles.description}>
          Explore the beauty of Calgary and Vancouver, two of Canada's most vibrant cities.
        </Text>
        <TouchableOpacity style={styles.signOut} onPress={() => setIsSignedIn(false)}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.tab} onPress={() => router.push('/Calgary')}>
          <Text style={styles.tabText}>Calgary</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab} onPress={() => router.push('/Vancouver')}>
          <Text style={styles.tabText}>Vancouver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
  navBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fafafa',
    height: 60,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#007AFF',
  },
  signOut: {
    marginTop: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ADD8E6',
    borderRadius: 6,
    alignSelf: 'center',
    borderColor: '#000',
    borderWidth: 1,
  },
});
