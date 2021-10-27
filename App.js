import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Counter =()=> {
  const [counter, setCounter] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text style={{fontSize:50, color: '#c70000'}}>Counter App</Text>
      <Text style={{fontSize:200, color: '#4B0082'}}>{counter}</Text>
      <Button style={styles.button} onPress={()=>{setCounter(counter+1)}} title ="INCREASE" />
      <Button style={styles.button} onPress={()=>{setCounter(counter-1)}} title ="DECREASE" />
      <Button style={styles.button} onPress={()=>{setCounter(counter-counter)}} title ="reset" />
    </View>
  );
}
export default Counter;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    width: 20,
    paddingBottom: 10
  }
});
