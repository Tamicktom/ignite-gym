//* Libraries imports
import { Image, type IImageProps } from 'native-base';

interface Props extends IImageProps {
  size: number;
}

export function UserPhoto({ size, ...rest }: Props) {
  return (
    <Image
      alt="Foto do usuário"
      w={size}
      h={size}
      rounded="full"
      borderWidth={2}
      borderColor="gray.400"
      {...rest}
    />
  );
}