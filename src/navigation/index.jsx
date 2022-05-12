import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import CoinDetailedScreen from '../screens/CoinDetailedScreen';
import BottomTabNavigator from './BottomTabNavigator';
const Stack = createNativeStackNavigator();
const Navigation =() =>{
    return(
        <Stack.Navigator
        initialRouteName='Rppt'
        screenOptions={{headerShown:false}}
        >
            
            <Stack.Screen  name={'Root'} component={BottomTabNavigator}/>
           <Stack.Screen  name={'CoinDetaildScreen'} component={CoinDetailedScreen}/>

        </Stack.Navigator>
    )

}
export default Navigation;