//* Libraries imports
import { useState } from 'react';
import { Heading, SectionList, VStack } from 'native-base';

//* Component imports
import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';

export function History() {
  const [exercises, setExercises] = useState([
    { title: '26:08:22', data: ['Puxada frontal', 'Remada baixa'] },
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
        ListEmptyComponent={() => (
          <Heading color="gray.100" fontSize="md" pt={10} pb={3} textAlign="center">
            Nenhum exercicio realizado ainda
          </Heading>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          exercises.length === 0 ? {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          } : {
            paddingHorizontal: 16,
            paddingBottom: 100,
          }
        }
        ItemSeparatorComponent={() => <VStack h="3" />}
      />
    </VStack>
  );
}