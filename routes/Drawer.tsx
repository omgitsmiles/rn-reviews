import React from "react";
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
                headerStyle: {
                    backgroundColor: "coral",
                },
                headerTintColor: "#444",
            }}
            >
                {/* <Drawer.Screen name="Review Details" component={ReviewDetails} /> */}
                <Drawer.Screen name="Home" component={HomeStack} />
                <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>
    );
}

export default DrawerNavigator;