import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import SignIn from './components/SignIn';
import HomeTabs from './pages/HomeTabs'; // adjust this path to wherever your HomeTabs actually lives

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <View style={styles.container}>
      {isSignedIn
        ? <HomeTabs />
        : <SignIn setIsSignedIn={setIsSignedIn} />
      }
      {/* This button is just for testing purposes to allow signing out. */}
      {/* <Button
        title="Sign Out"
        onPress={() => setIsSignedIn(false)}
      />  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
