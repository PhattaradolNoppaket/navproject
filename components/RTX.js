import { StyleSheet,View, Text,Button } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React ,{useState , useEffect} from 'react'
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";

const Stack = createNativeStackNavigator();

const RTX = () => {
   
    
   return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="First Page"
        screenOptions={{
          headerStyle: { backgroundColor: "#161185" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold", fontSize: 24 },
        }}
      >
        <Stack.Screen name="First Page" component={FirstPage} />
        <Stack.Screen name="Second Page" component={SecondPage} />
      </Stack.Navigator>
    </NavigationContainer>

   )

}

export default RTX

const styles = StyleSheet.create({
    
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        },
        textTopStyle:{
            fontSize: 25,
            textAlign:'center',
            marginBottom:16
        },
        textBottomSytel:{
            fontSize:16,
            textAlign:'center',
            color:'grey'
        }
    
});