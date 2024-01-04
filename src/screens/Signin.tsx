//* Libraries imports
import { VStack, Image } from "native-base";

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
    </VStack>
  );
}