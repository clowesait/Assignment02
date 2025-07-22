import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { supabase } from '../lib/supabaseClient';
import { SigninStyles } from './AppStyles';
import { useRouter } from 'expo-router';

type SignInProps = {
  setIsSignedIn: (signedIn: boolean) => void;
  setUserFullName: (name: string) => void;
};

export default function SignIn({ setIsSignedIn, setUserFullName }: SignInProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignIn = async () => {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return Alert.alert('Error', error.message);
    }

    const { user } = data;

    const { data: userData, error: userError } = await supabase
      .from('user_details')
      .select('first_name, last_name')
      .eq('uuid', user.id)
      .single();

    if (userError || !userData) {
      return Alert.alert('Error', 'Failed to fetch user details.');
    }

    setUserFullName(`${userData.first_name} ${userData.last_name}`);
    setIsSignedIn(true);
  };

  return (
    <View style={SigninStyles.container}>
      <Text style={SigninStyles.title}>Sign In</Text>

      <TextInput
        style={SigninStyles.input}
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
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

      <TouchableOpacity onPress={() => router.push('/SignUp')}>
        <Text style={{ marginTop: 12, color: 'blue' }}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}
