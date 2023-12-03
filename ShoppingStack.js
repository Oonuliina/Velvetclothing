import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function ShoppingStack() {
  return (
    <Stack.Navigator options={{headerShown: false}}>
        <Stack.Screen component={ShoppingBagScreen} name="Shopping Bag"  />
    </Stack.Navigator>
  )
}