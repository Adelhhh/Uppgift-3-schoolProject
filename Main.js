import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 


export default function Main({navigation, route}) {

    return (
        <View style={styles.container}>
            <Text style={styles.storvit}>{route.params.person.key}</Text>
      </View>

    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00ff00',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5
    },
storvit: {
    fontSize: 48,
    color: '#ffffff',
    fontWeight: 'bold'
    }
}); 