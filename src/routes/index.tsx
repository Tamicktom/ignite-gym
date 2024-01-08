//* Libraries imports
import { Box, useTheme } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

//* Routes imports
import { AuthRoutes } from "./auth.routes";

export function Routes() {

  const nativeBaseTheme = useTheme();

  const theme = { ...DefaultTheme };
  theme.colors = {
    ...DefaultTheme.colors,
    background: nativeBaseTheme.colors.gray[700],
  }

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}