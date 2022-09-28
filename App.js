import * as React from "react";
import { Button, View, Text ,SafeAreaView,Image,StyleSheet} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255,45,85)",
    // background:'rgb(242,242,242)',
    // card:'rgb(255,255,255)',
    // text:'rgb(28,28,30)',
    // border:'rgb(199,199,204)',
    // notification:'rgb(255,69,58)',
  },
};
function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      /> */}
      <Text>Feed Screen</Text>
      <Button onPress={() => navigation.openDrawer()} title="Open Drawer" />
    </View>
  );
}

// function Product({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
//       <Text>สินค้า</Text>
      
//     </View>
//   );
// }

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={styles.container}>
      
    <DrawerContentScrollView {...props}>
    <Image source={require('./assets/react_logo.png')} style={styles.sideMenuProfileIcon}/>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close Drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          // backgroundColor:'cyan',
          width: 240,
        },
      }}
    >
      
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Product" component={ProductScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
});
