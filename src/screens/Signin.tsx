//* Libraries imports
import { VStack, Image, Text, Center } from "native-base";

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
      <Center my={24}>
        <LogoSvg />
        <Text color="gray.100" fontSize="sm">
          Treine sua mente e o seu corpo
        </Text>
      </Center>
    </VStack>
  );
}