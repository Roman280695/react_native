import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const handlePressBtn = () => console.log("Nu najal i cho");
  const handleButtonPress1 = () =>
    console.log('Cod rabotaet');
  Alert.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);
  const handleButtonPress2 = () =>
    Alert.prompt('Alert Title', 'My Alert Msg', text => console.log(text));

  return (

    <SafeAreaView style={styles.container}>
      <Text style={[simpleStyle, styles.container]}>Hello!!</Text>


      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const simpleStyle = {
  backgroundColor: 'red',
  color: 'blue'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }

});
