import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from "react";
import { NavigationContainer  } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import  HomeScreen from "./Screens/HomeScreen";
import SignUpScreen from "./Screens/SignUpScreen"
import { LogBox } from "react-native"

import { useFonts } from "expo-font";


LogBox.ignoreAllLogs(true)
const Stack = createNativeStackNavigator();
 function App() {

  
 
  let [fontsLoaded] = useFonts({
    Bold: require("./assets/fonts/OpenSans-Bold.ttf"),
    OpenSansLight: require("./assets/fonts/OpenSans-Light.ttf"),
    OpenSansMedium: require("./assets/fonts/OpenSans-Medium.ttf"),
    OpenSansRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
    OpenSansSemiBold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
        }}
        
      >
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
