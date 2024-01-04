//* Libraries imports
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NativeBaseProvider, Center } from 'native-base';

//* Components imports
import Loading from "@components/Loading";
import { Signin } from '@screens/Signin';

//* Styles imports
import { THEME } from "./src/theme";

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style="dark" translucent backgroundColor='transparent' />
      {
        fontsLoaded
          ? <Signin />
          : <Loading />
      }
    </NativeBaseProvider>
  );
}