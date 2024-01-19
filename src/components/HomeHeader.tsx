//* Libraries imports
import { TouchableOpacity } from "react-native";
import { Heading, VStack, HStack, Text, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

//* Components imports
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt="12" pb="4" px="8" alignItems="center" justifyContent="space-between">
      <UserPhoto
        size={16}
        source={{ uri: 'https://github.com/tamicktom.png' }}
      />
      <VStack pl={4} flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>
        <Heading color="gray.100" fontFamily="heading">
          Tamicktom
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon
          as={MaterialIcons}
          name="logout"
          size={7}
          color="gray.200"
        />
      </TouchableOpacity>
    </HStack>
  )
}