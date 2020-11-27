import React, { Component, useState } from 'react';
import { Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Alert,
  Modal,
  TouchableHighlight,
  ScrollView, } from 'react-native';
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
      <Text style={[{ textAlign: 'center' }]}>
        {getDiscountPercent != '' && getOriginalPrice !== '' ? (
          <View>
            <Text style={styles.result}>
              You Save : {(getOriginalPrice * getDiscountPercent) / 100}
            </Text>
            <Text style={styles.result}>
              Final Price :{' '}
              {getOriginalPrice - (getOriginalPrice * getDiscountPercent) / 100}
            </Text>
            <TouchableHighlight style={styles.saveButton} onPress={addItem}>
              <Text style={styles.textStyle}>Save Details</Text>
            </TouchableHighlight>
          </View>
        ) : (
          ''
        )}
      </Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View>
          <ScrollView style={styles.modalView}>
            <View style={styles.modalText}>
              <Text style={{ fontWeight: 'bold' }}>Original{'\n'}Price</Text>
              <Text style={{ fontWeight: 'bold' }}>Discount{'\n'}%</Text>
              <Text style={{ fontWeight: 'bold' }}>
                Price{'\n'}After{'\n'}Discount
              </Text>
            </View>
            <View style={styles.modalText}>
              <View>
                {getPriceList.map((item) => (
                  <Text>
                    {item}
                    {'\n'}
                  </Text>
                ))}
              </View>
              <View>
                {getDiscountList.map((item) => (
                  <Text>
                    {item}
                    {'\n'}
                  </Text>
                ))}
              </View>
              <View>
                {getPriceAfterList.map((item) => (
                  <Text>
                    {item}
                    {'\n'}
                  </Text>
                ))}
              </View>
            </View>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Hide List</Text>
            </TouchableHighlight>
          </ScrollView>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Show List</Text>
      </TouchableHighlight>
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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: '60%',
  },
  result: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 30,
    paddingBottom: '5%',
  },
});
