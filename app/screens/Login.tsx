import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { NavigationProp } from '@react-navigation/native';
import { FirebaseError } from "firebase/app";

interface Props {
  navigation: NavigationProp<any>; // You can replace 'any' with your specific navigation parameters if needed
}

export default function Login({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Navigate to the todo list screen after successful sign-up
      navigation.navigate('Things Todo');
    } catch (error) {
      const firebaseError = error as FirebaseError;
      console.error("Error signing up:", firebaseError.message);
    }
  };

  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Navigate to the todo list screen after successful sign-in
      navigation.navigate('Things Todo');
    } catch (error) {
      const firebaseError = error as FirebaseError;
      console.error("Error signing in:", firebaseError.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        textContentType="password"
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button onPress={signUp} title="Create Account" />
      <Button onPress={signIn} title="Sign In" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: "column",
    paddingVertical: 20,
  },
  input: {
    marginVertical: 4,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
});
