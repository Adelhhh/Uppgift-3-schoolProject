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
            {key:"Apelsinjuice"},
            {key:"CIDER"},
            {key:"Banansmoothie"},
          ]}
          renderItem={({item}) => 
          <TouchableOpacity onPress={() => {
            navigation.navigate("Uppgift 3",{person: item});
          }}>

            <Box name={item}/>
      
         </TouchableOpacity>}/>

      </View>
  );
}