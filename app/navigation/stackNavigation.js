import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { FirstScreen } from 'screens';
import { LogIn } from 'screens';
import { CreateScreen } from 'screens';

const Stack = createNativeStackNavigator();


function NavStack() {
    return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Get Started" component={FirstScreen} />
            <Stack.Screen name="Login" component={LogIn} />
            <Stack.Screen name="Create Account" component={CreateScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default NavStack;