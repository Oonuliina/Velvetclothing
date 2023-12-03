import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ShoppingBagScreen from '../screens/ShoppingBagScreen';
import LoginScreen from '../screens/LoginScreen';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileScreen from '../screens/ProfileScreen';
import DrawerNavigation from './DrawerNavigation';
import AuthNavigation from './AuthNavigation'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();  


const TabNavigation = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
            tabBarShowLabel: false, 
            headerShown: false, 
            tabBarStyle: {
                backgroundColor: 'white'
            }, 
            tabBarInactiveTintColor: "black", 
            tabBarActiveTintColor: "black"
        }}
    >
        <Tab.Screen 
            name='home2' 
            component={AuthNavigation}  
            options={{  
                tabBarIcon: ({color, size, focused}) => (
                    <Ionicons 
                        name={focused ? "home" : "home-outline"} 
                        size={size} 
                        color={color} 
                    />
                )
            }}
        />

       
        <Tab.Screen 
            name='Shopping bag' 
            component={ShoppingBagScreen} 
            options={{
                tabBarBadge: 3, 
                tabBarBadgeStyle: {
                    backgroundColor: 'lightblue'
                },
                tabBarIcon: ({color, size, focused}) => (
                    <MaterialCommunityIcons 
                        name={focused ? "shopping" : "shopping-outline"} 
                        size={size} 
                        color={color} 
                    />
                )
            }}
        />
        <Tab.Screen 
            name='Login' 
            component={LoginScreen} 
            options={{ 
                tabBarIcon: ({color, size, focused}) => (
                    <FontAwesome5 name={focused ? "user-alt" : "user"} size={size} color={color} />
                )
            }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigation