import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { supabase } from '../lib/supabaseClient';
import { SigninStyles } from '../components/AppStyles';

export default function SignUp({ navigation }: any) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!firstName || !lastName || !email || !password) {
      return Alert.alert('Error', 'All fields are required.');
    }

    if (password.length < 6) {
      return Alert.alert('Error', 'Password must be at least 6 characters long.');
    }

    if (!email.includes('@')) {
      return Alert.alert('Error', 'Please enter a valid email address.');
    }

    if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
      return Alert.alert('Error', 'First and Last names must contain only letters.');
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error || !data.user) {
      return Alert.alert('Sign Up Failed', error?.message || 'Unknown error');
    }

    // Store user in user_details
    const { error: insertError } = await supabase.from('user_details').insert({
      uuid: data.user.id,
      first_name: firstName,
      last_name: lastName,
      email: email,
    });

    if (insertError) {
      return Alert.alert('Insert Error', insertError.message);
    }

    Alert.alert('Success', 'Sign-up complete. Please sign in.');
    navigation.navigate('SignIn');
  };

  return (
    <View style={SigninStyles.container}>
      <Text style={SigninStyles.title}>Sign Up</Text>

      <TextInput style={SigninStyles.input} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
      <TextInput style={SigninStyles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
      <TextInput style={SigninStyles.input} placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput style={SigninStyles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity style={SigninStyles.button} onPress={handleSignUp}>
        <Text style={SigninStyles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
