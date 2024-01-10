//* Libraries imports
import { Text } from "native-base";


type Props = {
  name: string;
}

export function Group(props: Props) {
  return (
    <Text color="gray.200" textTransform="uppercase" fontSize="xs" fontWeight="bold">
      {props.name}
    </Text>
  );
}