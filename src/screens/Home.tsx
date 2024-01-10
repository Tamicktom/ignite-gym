//* Libraries imports
import { VStack, Text } from 'native-base';

//* Components imports
import { HomeHeader } from '../components/HomeHeader';
import { Group } from '../components/Group';

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
      <Group name="Family" />
    </VStack>
  );
}