//* Libraries imports
import { Center, Text, VStack, ScrollView } from 'native-base';

//* Components imports
import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from "@components/UserPhoto";

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView flex={1}>
        <Center pt={6} px={10}>
          <UserPhoto size={32} source={{ uri: "https://github.com/tamicktom.png" }} />
        </Center>
      </ScrollView>
    </VStack>
  );
}