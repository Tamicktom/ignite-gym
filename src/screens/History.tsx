//* Libraries imports
import { VStack } from 'native-base';

//* Component imports
import { ScreenHeader } from '@components/ScreenHeader';

export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico de exercicios' />
    </VStack>
  );
}