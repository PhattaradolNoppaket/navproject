import * as React from "react";
import { Button, View, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer ,DefaultTheme} from "@react-navigation/native";

const MyTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'rgb(255,45,85)',
    // background:'rgb(242,242,242)',
    // card:'rgb(255,255,255)',
    // text:'rgb(28,28,30)',
    // border:'rgb(199,199,204)',
    // notification:'rgb(255,69,58)',
  }
}

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      /> */}
      <Text>Feed Screen</Text>
      <Button onPress={() => navigation.openDrawer()} title="Open Drawer" />
      <Button onPress={() => navigation.toggleDrawer()} title="Toggle Drawer" />
    </View>
  );
}

function Article({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <Text>Article Screen</Text>
      <Button onPress={() => navigation.openDrawer()} title="Open Drawer" />
      <Button onPress={() => navigation.toggleDrawer()} title="Toggle Drawer" />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Close Drawer" onPress={() => props.navigation.closeDrawer()} />
      <DrawerItem label="Toggle Drawer" onPress={() => props.navigation.toggleDrawer()} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions = {
        {
          drawerStyle:{
            // backgroundColor:'cyan',
            width:240
          }
        }
      }
    >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme ={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}
