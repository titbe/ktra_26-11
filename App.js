import { View, Text } from 'react-native'
import React from 'react'
import Payment from './screens/Payment'
import Cart from './screens/Cart'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import Notifications from './screens/Notifications'
import ScaneScreen from './screens/ScaneScreen'
import Clock from './screens/Clock'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName='Cart'>
            <Tab.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Tab.Screen name='Notifications' component={Notifications} options={{headerShown:false}}/>
            <Tab.Screen name='Scane' component={ScaneScreen} options={{headerShown:false}}/>
            <Tab.Screen name='Clock' component={Clock} options={{headerShown:false}}/>
            <Tab.Screen name='Cart' component={Cart} options={{headerShown:false}}/>
        </Tab.Navigator>

    </NavigationContainer>
  )
}

export default App