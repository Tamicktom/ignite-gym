//* Libraries imports
import { Box } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

//* Routes imports
import { AuthRoutes } from "./auth.routes";

export function Routes() {

  const theme = { ...DefaultTheme };
  theme.colors.background = "transparent";

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}