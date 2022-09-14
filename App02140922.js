import { View, Text ,Button} from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from "@react-navigation/drawer";
  import { NavigationContainer ,DefaultTheme} from "@react-navigation/native";

function HomeScreen({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>Home</Text>
    <Button title ='go to setting' onPress={()=>navigation.navigate('Settings')}/>
    </View>
  )
}
function SettingScreen({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>Setting!</Text>
    <Button title ='go to home' onPress={()=>navigation.navigate('Home')}/>
    </View>
  )
}

const Tab = createBottomTabNavigator();

function Mytabs(){
  
  return(
    <Tab.Navigator
    screenOptions={({route})=>({
      tabBarIcon:({focused,color,size})=>{
        let iconName;
        if(route.name==='Home'){
          iconName = focused
          ?'ios-information-circle'
          :'ios-information-circle-outline'
        }else if(route.name==='Settings'){
        iconName = focused ? 'ios-list-box' : 'ios-list'
      }
      //you can return any component that you like here
      return <Ionicons name={iconName} size={size} color={color}/>
    },
    tabBarActiveTintColor:'red',
    tabBarInactiveTintColor:'gray',
    })}
    
    >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={SettingScreen} />
  </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Mytabs/>
    </NavigationContainer>
  )
}

export default App