import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createStackNavigator();

const HomeStack: React.FC = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
                <Stack.Screen name="Review Details"  component={ReviewDetails} />
            </Stack.Navigator>
    );
}

export default HomeStack;


