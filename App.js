import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cider from './Cider';
import Banan from './Banan';
import Homepage from './Homepage';
import Apelsin from './Apelsin';
import Main from './Main';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='Uppgift-3' component={Homepage}/>
        <Stack.Screen name='Apelsin' component={Apelsin}/>
        <Stack.Screen name='Cider' component={Cider}/>
        <Stack.Screen name='Banan' component={Banan}/>
        <Stack.Screen name='Uppgift 3' component={Main}/>



      </Stack.Navigator>
    </NavigationContainer>
  );
}
