import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ForgotPassword from './forgot';
import Home from './home';
import SingIn from './login';
import Regestration from './reg';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

const Main = ({isLoggin}) => (
  <NavigationContainer>
    {!isLoggin ? (
      <Stack.Navigator>
        <Stack.Screen name={'Sing'} component={SingIn} />
        <Stack.Screen name={'Forgot'} component={ForgotPassword} />
        <Stack.Screen name={'Reg'} component={Regestration} />
      </Stack.Navigator>
    ) : (
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={Home} />
      </Stack.Navigator>
    )}
  </NavigationContainer>
);

const mapState = state => ({
  isLoggin: state.login.isLoggin,
});

export default connect(mapState)(Main);
