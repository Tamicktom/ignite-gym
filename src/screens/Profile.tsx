//* Libraries imports
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Center, VStack, ScrollView, Skeleton, Heading } from 'native-base';

//* Components imports
import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from "@components/UserPhoto";
import { Input } from '@components/Input';
import { Button } from '@components/Button';

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
              : <TouchableOpacity>
                <UserPhoto
                  size={PHOTO_SIZE}
                  source={{ uri: "https://github.com/tamicktom.png" }}
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

        <VStack px={10} pt={12} pb={10}>
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