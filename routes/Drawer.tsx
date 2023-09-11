import React from "react";
import { Image, ImageBackground, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ReviewDetails from "../screens/ReviewDetails";
import About from "../screens/About";
import HomeStack from "./HomeStack";   

const Drawer = createDrawerNavigator();

// const HomeStack = () => {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Review Details" component={ReviewDetails} />
//       </Stack.Navigator>
//     );
//   }


const DrawerNavigator: React.FC = () => {
    return (
            <Drawer.Navigator screenOptions={{
                headerRight: () => (
                    <Image
                        source={require("../assets/heart_logo.png")}
                        style={{ width: 26, height: 26, marginRight: 20 }}
                    />
                ),
                headerBackground: () => (
                    <ImageBackground
                        source={require("../assets/game_bg.png")}
                        style={{ height: 100 }}
                    />
                ),
            }}
            >
                {/* <Drawer.Screen name="Review Details" component={ReviewDetails} /> */}
                <Drawer.Screen name="GameZone" component={HomeStack} />
                <Drawer.Screen name="About GameZone" component={About} />
            </Drawer.Navigator>
    );
}

export default DrawerNavigator;