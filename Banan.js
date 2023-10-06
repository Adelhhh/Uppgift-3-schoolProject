import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Banan({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.banan}>Banan</Text>
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
banan: {
    fontSize: 48,
    color: '#ffffff'
}
});