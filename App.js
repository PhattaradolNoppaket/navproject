import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="First Page"
        screenOptions={{
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold", fontSize: 24 },
        }}
      >
        <Stack.Screen name="First Page" component={FirstPage} />
        <Stack.Screen name="Second Page" component={SecondPage} />
        <Stack.Screen name="Third Page" component={ThirdPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
});
