//* Libraris imports
import { Platform } from "react-native";
import { createBottomTabNavigator, type BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";

//* Assets imports
import HomeSvg from "@assets/home.svg";
import HistorySvg from "@assets/history.svg";
import ProfileSvg from "@assets/profile.svg";

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

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesProps>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>();

export function AppRoutes() {
  const { sizes, colors } = useTheme();

  const iconSize = sizes[8];

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.green[500],
      tabBarInactiveTintColor: colors.gray[200],
      tabBarStyle: {
        height: Platform.OS === "android" ? "auto" : 96,
        backgroundColor: colors.gray[600],
        borderTopWidth: 0,
        paddingBottom: sizes[10],
        paddingTop: sizes[6],
      },
    }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: (props) => (
            <HomeSvg
              width={iconSize}
              height={iconSize}
              fill={props.focused ? props.color : "gray"}
            />
          ),
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: (props) => (
            <HistorySvg
              width={iconSize}
              height={iconSize}
              fill={props.focused ? props.color : "gray"}
            />
          ),
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: (props) => (
            <ProfileSvg
              width={iconSize}
              height={iconSize}
              fill={props.focused ? props.color : "gray"}
            />
          ),
        }}
      />
      <Screen
        name="exercise"
        component={Exercice}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
}