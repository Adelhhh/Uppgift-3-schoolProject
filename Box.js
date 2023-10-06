import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Box({props}) {

    return (
        <View style={styles.container}>
            <Text style={styles.boxtext}>{props.name.key}</Text>
      </View>
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0000ff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 0
    },
    boxtext: {
    color: '#ffffff',
    }
});