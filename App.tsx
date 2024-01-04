//* Libraries imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NativeBaseProvider, Box } from 'native-base';

//* Components imports
import Loading from "@components/Loading";

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <NativeBaseProvider>
      <Box>
        <StatusBar translucent backgroundColor="transparent" style='light' />
        <StatusBar style="auto" />
        <Text>Hello World</Text>
      </Box>
    </NativeBaseProvider>
  );
}