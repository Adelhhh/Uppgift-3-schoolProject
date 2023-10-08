import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cider from './Cider';
import Banansmoothie from './Banansmoothie';
import Homepage from './Homepage';
import Apelsinjuice from './Apelsinjuice';
import Main from './Main';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='Uppgift-3' component={Homepage}/>
        <Stack.Screen name='Apelsinjuice' component={Apelsinjuice}/>
        <Stack.Screen name='Cider' component={Cider}/>
        <Stack.Screen name='Banansmoothie' component={Banansmoothie}/>
        <Stack.Screen name='Uppgift 3' component={Main}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
