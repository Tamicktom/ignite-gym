//* Libraries imports
import { Heading, VStack, HStack, Text } from "native-base";

//* Components imports
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt="12" pb="4" px="8" alignItems="center">
      <UserPhoto
        size={16}
        source={{ uri: 'https://github.com/tamicktom.png' }}
      />
      <VStack pl={4}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>
        <Heading color="gray.100">
          Rodrigo
        </Heading>
      </VStack>
    </HStack>
  )
}