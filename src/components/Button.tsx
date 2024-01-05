//* Libraries imports
import { Button as NbButton, Text, IButtonProps } from "native-base";

interface Props extends IButtonProps {
  label: string;
}

export function Button({ label, variant, ...rest }: Props) {
  return (
    <NbButton
      h={14}
      w="full"
      bg={variant === "outline" ? "transparent" : "green.700"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="green.500"
      rounded="sm"
      _pressed={{
        bg: variant === "outline" ? "gray.500" : "green.600",
      }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "green.500" : "white"}
        fontSize="sm"
        fontFamily="heading">
        {label}
      </Text>
    </NbButton>
  );
}