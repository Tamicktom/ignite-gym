//* Libraries imports
import { Input as NbInput, Box, type IInputProps } from "native-base";

interface Props extends IInputProps { }

export function Input(props: Props) {
  return (
    <Box
      width="100%"
      pb={4}
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
        {...props}
      />
    </Box>
  );
}