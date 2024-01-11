//* Libraries imports
import { TouchableOpacity } from 'react-native';
import { Center, Text, VStack, Icon, HStack, Heading } from 'native-base';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

//* Utils imports
import type { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from "@assets/body.svg";

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

        <HStack justifyContent="space-between" pt={4} pb={8} alignItems="center">
          <Heading color="gray.100" fontSize="lg" flexShrink={1}>
            Puxada Frontal
          </Heading>

          <HStack alignItems="center">
            <BodySvg />
            <Text color="gray.200" pl={1} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
}