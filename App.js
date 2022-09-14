import { View, Text ,Button} from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import {NavigationContainer,DefaultTheme} from '@react-navigation/native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Ionicons name="home" color={'green'} size={40}/>
    <Text>Home Screen</Text>
   
      
    
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
// const MyTheme = {
//   ...DefaultTheme,
//   colors:{
//     ...DefaultTheme.colors,
//     primary:'rgb(255,45,85)',
//     // background:'rgb(242,242,242)',
//     // card:'rgb(255,255,255)',
//     // text:'rgb(28,28,30)',
//     // border:'rgb(199,199,204)',
//     // notification:'rgb(255,69,58)',
//   }
// }
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
    headerRight:()=>(
      <Ionicons name="person-add" color={'black'} size={30}/>
    )
    })}
    
    >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={SettingScreen} />
  </Tab.Navigator>
  );
}

function Mytabs2(){
  
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
    headerRight:()=>(
      <Ionicons name="person-add" color={'black'} size={15}/>
    )
    })}
    
    >
    <Tab.Screen name="Settings" component={SettingScreen} />
    <Tab.Screen name="Home" component={HomeScreen} />
    
  </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation
    >
      <Drawer.Screen name="Home" component={Mytabs} />
      <Drawer.Screen name="Settings" component={Mytabs2} />
    </Drawer.Navigator>
    
    
  );
}

const App = () => {
  return (
    <NavigationContainer>
      {/* <Mytabs/> */}
      <MyDrawer/>
    </NavigationContainer>

  )
}

export default App