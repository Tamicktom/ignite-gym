//* Libraries imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NativeBaseProvider, Box, Center } from 'native-base';

//* Components imports
import Loading from "@components/Loading";

//* Styles imports
import { THEME } from "./src/theme";

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <NativeBaseProvider theme={THEME}>
      {
        fontsLoaded ? (
          <Center flex={1}>
            <StatusBar translucent backgroundColor="transparent" style='dark' />
            <Text>Hello World</Text>
          </Center>
        ) : (
          <Loading />
        )
      }
    </NativeBaseProvider>
  );
}