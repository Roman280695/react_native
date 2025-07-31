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
      <Text>Hello!!</Text>
      <Button title={'To click'} color="red" onPress={handleButtonPress1} />
      <Button title={'To'} color="red" onPress={handleButtonPress2} />

      <TouchableWithoutFeedback onPress={handlePressBtn}>

        <Image blurRadius={15} source={{
          width: 200,
          height: 150,
          uri: "https://24gadget.ru/uploads/posts/2014-04/thumbs/1397458936_ios-8.jpg"

        }} />

      </TouchableWithoutFeedback>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }

});
