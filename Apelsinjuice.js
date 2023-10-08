import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Apelsinjuice({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.Apelsinjuice}>Apelsinjuice</Text>
      </View>

    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00ff00',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 0
    },
    Apelsinjuice: {
    fontSize: 48,
    color: '#ffffff'
    }
});