//* Libraries imports
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Center, VStack, ScrollView, Skeleton, Text } from 'native-base';

//* Components imports
import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from "@components/UserPhoto";

const PHOTO_SIZE = 32;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView flex={1}>
        <Center pt={6} px={10}>
          {
            photoIsLoading
              ? <Skeleton
                w={PHOTO_SIZE}
                h={PHOTO_SIZE}
                rounded="full"
                startColor="gray.500"
                endColor="gray.400"
              />
              : <UserPhoto
                size={PHOTO_SIZE}
                source={{ uri: "https://github.com/tamicktom.png" }}
              />
          }

          <TouchableOpacity>
            <Text color="green.500" fontWeight="bold" fontSize="md" pt={2} pb={8}>
              Alterar foto
            </Text>
          </TouchableOpacity>
        </Center>
      </ScrollView>
    </VStack>
  );
}