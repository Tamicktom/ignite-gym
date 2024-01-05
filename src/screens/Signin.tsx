//* Libraries imports
import { VStack, Image, Text, Center, Heading } from "native-base";

import LogoSvg from "@assets/logo.svg"
import BackgroundImg from "@assets/background.png";

export function Signin() {
  return (
    <VStack flex={1} background="gray.700">
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
      </Center>
    </VStack>
  );
}