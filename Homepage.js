import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Box from './Box';

export default function Homepage({navigation}) {


    return (
      <View >

        <FlatList 
        data={[
          {key:"APELSIN"},
          {key:"CIDER"},
          {key:"BANAN"},
        ]}
        renderItem={({item}) => <TouchableOpacity onPress={() => {
          navigation.navigate("Uppgift 3",{person: item});
         }}>

          <Box name={item}/>
      
         </TouchableOpacity>}/>

        <Button title='Förtsätt till Apelsin sida' onPress={() => {
         navigation.navigate('Apelsin')
        }}/>
        <Button title='Förtsätt till Cider sida' onPress={() => {
          navigation.navigate('Cider')
        }}/>
        <Button title='Förtsätt till Banan sida' onPress={() => {
          navigation.navigate('Banan')
        }}/>


      </View>
    );
  }