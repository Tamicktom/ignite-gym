//* Libraries imports
import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//* Components imports
import Loading from "@components/Loading";
import { Routes } from '@routes/index';

//* Styles imports
import { THEME } from "./src/theme";

export const queryClient = new QueryClient();

/**
 * This is the main component of the application, the first component that is rendered.
 */

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={THEME}>
        <StatusBar style="light" translucent backgroundColor='transparent' />
        {
          fontsLoaded
            ? <Routes />
            : <Loading />
        }
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}