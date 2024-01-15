//* Libraries imports
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Center, VStack, ScrollView, Skeleton, Heading, useToast } from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

//* Components imports
import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from "@components/UserPhoto";
import { Input } from '@components/Input';
import { Button } from '@components/Button';

const PHOTO_SIZE = 32;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [photo, setPhoto] = useState<string>("https://github.com/tamicktom.png");

  const toast = useToast();

  async function handleUserPhotoSelect() {
    setPhotoIsLoading(true);
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 0.9,
        aspect: [1, 1],
      });

      if (photoSelected.canceled) return;

      if (photoSelected.assets.length && photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);
        //if image exist, and is bigger than 3mb, cancel
        if (photoInfo.exists && ((photoInfo.size / 1024) / 1024) > 3)
          return toast.show({
            title: "Imagem muito grande!",
            placement: "top",
            bgColor: "red.500",
          });

        if (photoInfo.exists) {
          setPhoto(photoSelected.assets[0].uri);
          toast.show({
            title: "Foto atualizada!",
            placement: "top",
            duration: 3000,
          });
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView flex={1} contentContainerStyle={{ paddingBottom: 56 }}>
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
              : <TouchableOpacity
                onPress={handleUserPhotoSelect}
              >
                <UserPhoto
                  size={PHOTO_SIZE}
                  source={{ uri: photo }}
                />
              </TouchableOpacity>
          }

          <Center w="full" pt="8">
            <Input
              placeholder="Digite seu nome"
              defaultValue="Tamicktom"
              bg="gray.600"
            />

            <Input
              placeholder="Digite seu e-mail"
              defaultValue="exemplo@exemplo.com"
              bg="gray.600"
              isDisabled
            />
          </Center>
        </Center>

        <VStack px={10} pt="12" pb={10}>
          <Heading color="gray.200" fontSize="md" pb="1">
            Alterar senha
          </Heading>

          <Input
            placeholder="Senha antiga"
            bg="gray.600"
            secureTextEntry
          />

          <Input
            placeholder="Nova senha"
            bg="gray.600"
            secureTextEntry
          />

          <Input
            placeholder="Confirmar nova senha"
            bg="gray.600"
            secureTextEntry
          />

          <Center w="full" pt="8">
            <Button
              label="Atualizar"
            />
          </Center>
        </VStack>
      </ScrollView>
    </VStack>
  );
}