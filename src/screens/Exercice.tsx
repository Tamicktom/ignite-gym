//* Libraries imports
import { TouchableOpacity } from 'react-native';
import { Text, VStack, Icon, HStack, Heading, Image, Box, ScrollView } from 'native-base';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

//* Components imports
import { Button } from '@components/Button';

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
          <Heading color="gray.100" fontSize="lg" flexShrink={1} fontFamily="heading">
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

      <ScrollView>
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

          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack justifyContent="space-around" alignItems="center" pb={6} pt={5}>
              <HStack> 
                <SeriesSvg />
                <Text color="gray.200" pl={2}>
                  3 séries
                </Text>
              </HStack>
              <HStack>
                <RepetitionsSvg />
                <Text color="gray.200" pl={2}>
                  10 repetições
                </Text>
              </HStack>
            </HStack>

            <Button
              label="Marcar como realizado"
            />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}