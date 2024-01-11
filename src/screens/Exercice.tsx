//* Libraries imports
import { TouchableOpacity } from 'react-native';
import { Center, Text, VStack, Icon } from 'native-base';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

//* Utils imports
import type { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Exercice() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon
            as={Feather}
            name="arrow-left"
            color="green.500"
            size={6}
          />
        </TouchableOpacity>
      </VStack>
    </VStack>
  );
}