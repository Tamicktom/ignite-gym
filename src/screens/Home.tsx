//* Libraries imports
import { VStack, Text } from 'native-base';

//* Components imports
import { HomeHeader } from '../components/HomeHeader';

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
    </VStack>
  );
}