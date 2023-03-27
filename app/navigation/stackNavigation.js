import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { FirstScreen } from '../screens/GetStarted';
import { LogIn } from '../screens/LogIn';
import { CreateScreen } from '../screens/Create';
import { Home } from '../screens/Home';

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
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default NavStack;