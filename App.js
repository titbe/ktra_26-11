import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Notifications from './screens/Notifications';
import ScaneScreen from './screens/ScaneScreen';
import Clock from './screens/Clock';
import Cart from './screens/Cart';
import Payment from './screens/Payment';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
      <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="MyStack">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image
                source={require('./assets/Group152.png')}
                style={{ tintColor: '#F08F5F' }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image
                source={require('./assets/Group153.png')}
                style={{ tintColor: '#F08F5F' }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Scane"
          component={ScaneScreen}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image
                source={require('./assets/Vector.png')}
                style={{ tintColor: '#F08F5F' }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Clock"
          component={Clock}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image
                source={require('./assets/Group154.png')}
                style={{ tintColor: '#F08F5F' }}
              />
            ),
          }}
        />
        <Tab.Screen
            name="MyStack"
            component={MyStack}
            options={({ route }) => ({
                headerShown: false,
                tabBarLabel: '',
                tabBarIcon: () => (
                <Image
                    source={require('./assets/Group161.png')}
                    style={{ tintColor: '#F08F5F' }}
                />
                ),
                tabBarVisible: route.state?.index === undefined || route.state.index === 0,
            })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
