import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {FunctionComponent} from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {AuthProvider} from './app/core/store/auth-context';
import {LoginScreen} from './app/modules/login/login-screen';

const Stack = createStackNavigator();

const App: FunctionComponent<any> = () => {
  return (
    <PaperProvider>
      <AuthProvider>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </PaperProvider>
  );
};

export default App;
