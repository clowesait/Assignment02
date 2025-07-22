import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import SignIn from '../components/SignIn';
import HomeTabs from './HomeTabs';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userFullName, setUserFullName] = useState('');

  return (
    <View style={styles.container}>
      {isSignedIn
        ? <HomeTabs userFullName={userFullName} setIsSignedIn={setIsSignedIn} />
        : <SignIn setIsSignedIn={setIsSignedIn} setUserFullName={setUserFullName} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
