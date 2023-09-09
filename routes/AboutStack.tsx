import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import About from '../screens/About';

const Stack = createStackNavigator();

const aboutStack: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "coral",
                    },
                    headerTintColor: "#444",
                }}>
                <Stack.Screen name="About" component={About} 
                    options={{ title: "About GameZone",
                            //    headerStyle: {
                            //         backgroundColor: "#333",
                            //      },
                               }}/>
         </Stack.Navigator>
        </NavigationContainer>
    );
}

export default aboutStack;
