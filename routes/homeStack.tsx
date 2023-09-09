import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createStackNavigator();

const homeStack: React.FC = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default homeStack;


