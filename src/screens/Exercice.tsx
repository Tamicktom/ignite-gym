//* Libraries imports
import { TouchableOpacity } from 'react-native';
import { Center, Text, VStack, Icon, HStack, Heading, Image } from 'native-base';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

//* Utils imports
import type { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";

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

      <VStack p={8}>
        <Image
          w="full"
          h={80}
          source={{ uri: "https://i.pinimg.com/736x/4e/5d/db/4e5ddbf49c3c268601a71afcd6cdaf40.jpg" }}
          alt="Exercício"
          resizeMode='cover'
          mb={4}
          rounded="lg"
        />
      </VStack>
    </VStack>
  );
}