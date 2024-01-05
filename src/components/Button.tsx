//* Libraries imports
import { Button as NbButton, Text, IButtonProps } from "native-base";

interface Props extends IButtonProps {
  label: string;
}

export function Button({ label, ...rest }: Props) {
  return (
    <NbButton
      h={14}
      w="full"
      bg="green.700"
      rounded="sm"
      _pressed={{
        bg: "green.500",
      }}
      {...rest}
    >
      <Text color="white" fontSize="sm" fontFamily="heading">
        {label}
      </Text>
    </NbButton>
  );
}