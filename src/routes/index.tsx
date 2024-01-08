//* Libraries imports
import { NavigationContainer } from "@react-navigation/native";

//* Routes imports
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}