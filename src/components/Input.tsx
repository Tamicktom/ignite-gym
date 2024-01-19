//* Libraries imports
import { Input as NbInput, FormControl, type IInputProps } from "native-base";

interface Props extends IInputProps {
  errorMessage?: string;
}

export function Input({ errorMessage, isInvalid, ...rest }: Props) {
  const isWrong = !!errorMessage || isInvalid;
  return (
    <FormControl
      width="100%"
      pb={4}
      isInvalid={isWrong}
    >
      <NbInput
        bg="gray.700"
        h={14}
        px={4}
        borderWidth={1}
        borderColor="transparent"
        fontSize="md"
        color="white"
        placeholderTextColor="gray.300"
        _focus={{
          bg: "gray.700",
          borderWidth: 1,
          borderColor: "green.500",
        }}
        isInvalid={isWrong}
        _invalid={{
          borderColor: "red.500",
          borderWidth: 1,
        }}
        {...rest}
      />

      <FormControl.ErrorMessage color="red.500" fontSize="sm">
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}