//* Libraries imports
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//* Screens imports
import { Signin } from "@screens/Signin";
import { Signup } from "@screens/Signup";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen
        name="SignIn"
        component={Signin}
      />
      <Screen
        name="SignUp"
        component={Signup}
      />
    </Navigator>
  );
}