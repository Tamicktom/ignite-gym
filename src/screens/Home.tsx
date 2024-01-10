//* Libraries imports
import { useState } from 'react';
import { VStack, Text, HStack } from 'native-base';

//* Components imports
import { HomeHeader } from '../components/HomeHeader';
import { Group } from '../components/Group';

export function Home() {
  const [groupSelected, setGroupSelected] = useState('costas');

  return (
    <VStack flex={1}>
      <HomeHeader />
      <HStack>
        <Group name="costas" isActive={groupSelected === 'costas'} onPress={() => setGroupSelected('costas')} />
        <Group name="bicipes" isActive={groupSelected === 'bicipes'} onPress={() => setGroupSelected('bicipes')} />
        <Group name="triceps" isActive={groupSelected === 'triceps'} onPress={() => setGroupSelected('triceps')} />
        <Group name="peito" isActive={groupSelected === 'peito'} onPress={() => setGroupSelected('peito')} />
      </HStack>
    </VStack>
  );
}