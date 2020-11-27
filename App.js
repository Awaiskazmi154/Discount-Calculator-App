import React, { Component, useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';


export default function App() {

  const [getOriginalPrice, setOriginalPrice] = useState('');
  const [getDiscountPercent, setDiscountPercent] = useState('');

  return (
    <View style={styles.container}>
      <Text>Enter Original Price</Text>
      <TextInput
        style={styles.input}
        keyboardType={'number-pad'}
        placeholder={'e.g. 500'}
        onChangeText={(val) => {
          val >= 0 ? setOriginalPrice(val) : '';
        }}
      />
      <Text>Enter Discount % </Text>
      <TextInput
        style={styles.input}
        keyboardType={'number-pad'}
        placeholder={'e.g. 20'}
        onChangeText={(val) => {
          val >= 0 && val <= 100 ? setDiscountPercent(val) : '';
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
