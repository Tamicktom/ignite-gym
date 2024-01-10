//* Libraries imports
import { Text, Pressable, IPressableProps } from "native-base";


interface Props extends IPressableProps {
  name: string;
}

export function Group({ name, ...rest }: Props) {
  return (
    <Pressable
      mr={3}
      w={24}
      h={10}
      bgColor="gray.600"
      rounded="md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      borderColor="transparent"
      borderWidth={1}
      _pressed={{
        borderColor: "green.500",
        borderWidth: 1
      }}
      {...rest}
    >
      <Text color="gray.200" textTransform="uppercase" fontSize="xs" fontWeight="bold">
        {name}
      </Text>
    </Pressable>
  );
}