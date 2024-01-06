//* Libraries imports
import { VStack, Image, Text, Center, Heading, Box, ScrollView } from "native-base";

//* Components imports
import { Input } from "@components/Input";
import { Button } from "@components/Button";

//* Local imports
import LogoSvg from "@assets/logo.svg"
import BackgroundImg from "@assets/background.png";

export function Signin() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1
      }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} background="gray.700" px={10} pb={16}>
        <Image
          source={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          // height="100%"
          // width="100%"
          position="absolute"
        />
        <Center py={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" pb={6} fontFamily="heading">
            Acesse sua conta
          </Heading>
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            placeholder="Senha"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Box pt={6} w="full">
            <Button label="Acessar" />
          </Box>
        </Center>

        <Center pt={24}>
          <Text color="gray.100" fontSize="sm" textAlign="center" pb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>
          <Button label="Criar conta" variant="outline" />
        </Center>
      </VStack>
    </ScrollView>
  );
}