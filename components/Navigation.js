import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AddExerciseScreen from "../screens/AddExerciseScreen";
import ExerciseListScreen from "../screens/ExerciseListScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { useContext } from "react";
import { ExerciseContext } from "../context/Contexts";
import { Colors } from "../style/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Navigation() {


    const {exercises} = useContext(ExerciseContext);
    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarStyle: {
            backgroundColor: Colors.tertiary
          },
          headerShown: true,
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === "Add Workout") {
              iconName = focused ? "add-outline" : "add";
            } else if (route.name === "All Exercises") {
              iconName = focused ? "list-outline" : "list";
            } else if (route.name === "Settings") {
              iconName = focused ? "cog-outline" : "cog";
            }

            return <Ionicons name={iconName} size={35} color={color} />;
          },
         
        })}
      >
        <Tab.Screen name="Add Workout" component={AddExerciseScreen} />
        <Tab.Screen
          options={{
            tabBarBadge: Object.keys(exercises).length,
            tabBarBadgeStyle: { backgroundColor: Colors.primary }
          }}
          name="All Exercises"
          component={ExerciseListScreen}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    </NavigationContainer>
    )
}