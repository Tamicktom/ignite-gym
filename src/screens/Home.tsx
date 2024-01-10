//* Libraries imports
import { useState } from 'react';
import { VStack, Text, HStack, FlatList, Heading } from 'native-base';

//* Components imports
import { HomeHeader } from '../components/HomeHeader';
import { Group } from '../components/Group';

//* Utils imports
import { idGenerator } from '@utils/idGenerator';

type Group = {
  id: string;
  name: string;
}

const initGroups: Group[] = [
  {
    id: idGenerator(),
    name: 'costas',
  },
  {
    id: idGenerator(),
    name: 'bicipes',
  },
  {
    id: idGenerator(),
    name: 'triceps',
  },
  {
    id: idGenerator(),
    name: 'peito',
  }
];


export function Home() {
  const [groups, setGroups] = useState<Group[]>(initGroups);
  const [groupSelected, setGroupSelected] = useState<string>(initGroups[0].id);

  return (
    <VStack flex={1}>
      <HomeHeader />
      <HStack>
        <FlatList
          data={groups}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Group
              name={item.name}
              isActive={item.id === groupSelected}
              onPress={() => setGroupSelected(() => item.id)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingX: "8",
            paddingY: "8",
          }}
        />
      </HStack>

      <VStack flex={1} px="8">
        <HStack justifyContent="space-between" alignItems="center" pb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            4
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
}