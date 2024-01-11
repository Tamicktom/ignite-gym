//* Libraries imports
import { useState } from 'react';
import { Heading, SectionList, VStack } from 'native-base';

//* Component imports
import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';

export function History() {
  const [exercises, setExercises] = useState([
    { title: 'Costas', data: ['Puxada frontal', 'Remada baixa'] },
    { title: 'Peito', data: ['Supino reto', 'Supino inclinado'] },
    { title: 'Ombros', data: ['Desenvolvimento', 'Elevação lateral'] },
    { title: 'Bíceps', data: ['Rosca direta', 'Rosca alternada'] },
    { title: 'Tríceps', data: ['Tríceps pulley', 'Tríceps testa'] },
    { title: 'Pernas', data: ['Agachamento', 'Leg press'] },
  ])

  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico de exercicios' />
      <SectionList
        flex={1}
        sections={exercises}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" pt={10} pb={3}>
            {section.title}
          </Heading>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16
        }}
        ItemSeparatorComponent={() => <VStack h="3" />}
        paddingBottom={100}
      />
    </VStack>
  );
}