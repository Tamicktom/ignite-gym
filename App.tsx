//* Libraries imports
import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';

//* Components imports
import Loading from "@components/Loading";
import { Routes } from '@routes/index';

//* Styles imports
import { THEME } from "./src/theme";

/**
 * This is the main component of the application, the first component that is rendered.
 */

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style="light" translucent backgroundColor='transparent' />
      {
        fontsLoaded
          ? <Routes />
          : <Loading />
      }
    </NativeBaseProvider>
  );
}