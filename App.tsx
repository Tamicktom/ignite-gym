//* Libraries imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" style='light' />
      <StatusBar style="auto" />
      <Text>Hello World</Text>
    </View>
  );
}