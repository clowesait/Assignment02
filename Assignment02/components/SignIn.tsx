import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import credentialsData from '../data/credentials.json'; 

type SignInProps = {
  setIsSignedIn: (signedIn: boolean) => void;
};

export default function SignIn({ setIsSignedIn }: SignInProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (username: string) => {
    if  (username.length < 5) {
      return false; // Username must be at least 5 characters long
    } else{
      return true;
    }
  };
  const validatePassword = (password: string) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return re.test(password);
  };

  const handleSignIn = () => {

    if (!validateEmail(username)) {
      return Alert.alert('Error', 'Username must be at least 5 characters long.');
    }
    if (!validatePassword(password)) {
      return Alert.alert('Error', 'Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters.');
    }

    const user = credentialsData.users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      Alert.alert('Success', 'You are signed in!');
      setIsSignedIn(true);
    } else {
      Alert.alert('Error', 'User not found.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff'
  },
  title: {
    fontSize: 24, marginBottom: 16, textAlign: 'center'
  },
  input: {
    height: 40, borderColor: '#ccc', borderWidth: 1,
    borderRadius: 4, paddingHorizontal: 8, marginBottom: 12
  }
});
