//* Libraries imports
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { HStack, Heading, Image, Text, VStack, Icon } from "native-base";
import { Entypo } from '@expo/vector-icons'

interface Props extends TouchableOpacityProps {}

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
    >
      <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="lg">
        <Image
          source={{
            uri: "https://i.ytimg.com/vi/JE3XUqMyHXo/hqdefault.jpg"
          }}
          alt="Imagem do execício"
          w={16}
          h={16}
          rounded="md"
        />
        <VStack pl={4} flex={1}>
          <Heading fontSize="lg" color="white">
            Remada unilateral
          </Heading>
          <Text fontSize="sm" color="gray.200" pt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon
          as={Entypo}
          name="chevron-thin-right"
          color="gray.300"
          size="sm"
          ml="auto"
        />
      </HStack>
    </TouchableOpacity>
  );
}