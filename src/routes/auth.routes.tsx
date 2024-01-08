//* Libraries imports
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

//* Screens imports
import { Signin } from "@screens/Signin";
import { Signup } from "@screens/Signup";

type AuthRoutes = {
  SignIn: undefined;
  SignUp: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: 'transparent'
      }
    }}>
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