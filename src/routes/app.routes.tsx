//* Libraris imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//* Screens imports
import { Home } from "@screens/Home";
import { History } from "@screens/History";
import { Exercice } from "@screens/Exercice";
import { Profile } from "@screens/Profile";

type AppRoutesProps = {
  home: undefined;
  history: undefined;
  exercise: undefined;
  profile: undefined;
}

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="history"
        component={History}
      />
      <Screen
        name="exercise"
        component={Exercice}
      />
      <Screen
        name="profile"
        component={Profile}
      />
    </Navigator>
  );
}