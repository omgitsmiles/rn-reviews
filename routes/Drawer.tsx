import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/About";
import Home from "../screens/Home";  

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
    return (
            <Drawer.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: "coral",
                },
                headerTintColor: "#444",
            }}
            >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>
    );
}

export default DrawerNavigator;