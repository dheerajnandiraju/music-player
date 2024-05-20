import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Index from "./Index";
import Account from "./account";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Bottom() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="white" />
            ) : (
              <Entypo name="home" size={24} color="red" />
            ),
        }}
        name="Home"
        component={Index}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="white" />
            ) : (
              <Entypo name="home" size={24} color="red" />
            ),
        }}
        name="Settings"
        component={Account}
      />
    </Tab.Navigator>
  );
}

export default Bottom;

