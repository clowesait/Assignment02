import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, Alert, StyleSheet } from 'react-native';
import credentialsData from '../data/credentials.json'; 
import { SigninStyles } from './AppStyles';

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
    <View style={SigninStyles.container}>
      <Text style={SigninStyles.title}>Sign In</Text>

      <TextInput
        style={SigninStyles.input}
        placeholder="Username"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={SigninStyles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={SigninStyles.button} onPress={handleSignIn}>
        <Text style={SigninStyles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}