import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./app/screens/HomeScreen";
import NewPostScreen from "./app/screens/NewPostScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen1 from "./app/screens/RegisterScreen1";
import RegisterScreen2 from "./app/screens/RegisterScreen2";
import RegisterScreen3 from "./app/screens/RegisterScreen3";
import RegisterScreen4 from "./app/screens/RegisterScreen4";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen1" component={RegisterScreen1} />
      <Stack.Screen name="RegisterScreen2" component={RegisterScreen2} />
      <Stack.Screen name="RegisterScreen3" component={RegisterScreen3} />
      <Stack.Screen name="RegisterScreen4" component={RegisterScreen4} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedInStack;
