import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AllProducts from '../screens/ProductsScreen';
import CustomDrawer from '../components/CustomDrawer';
import NewIn from '../screens/navigationScreens/NewInScreen'
import SpringSale from '../screens/navigationScreens/SpringSaleScreen'
import Dresses from '../screens/navigationScreens/DressesScreen'
import Trousers from '../screens/navigationScreens/TrousersScreen'
import Skirts from '../screens/navigationScreens/SkirtsScreen'
import Knitwear from '../screens/navigationScreens/KnitwearScreen'
import Shirts from '../screens/navigationScreens/ShirtsScreen'
import Coats from '../screens/navigationScreens/CoatsScreen'
import Accessories from '../screens/navigationScreens/AccessoriesScreen'
import LoginScreen from '../screens/LoginScreen';
import Shopping from '../screens/ShoppingBagScreen'
import ProductScreen from '../screens/ProductScreen';
import TabNavigation from './TabNavigation';
import ShoppingBagScreen from '../screens/ShoppingBagScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Bag" component={ShoppingBagScreen} />

      </Stack.Navigator>
  )
}

const ItemStack = () => {
    return (
      <Stack.Navigator options={{headerShown: false}}>
          <Stack.Screen component={AllProducts} name="All2"  />
          <Stack.Screen component={ProductScreen} name="Product" />
      </Stack.Navigator>
    )
  }
  

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
    drawerContent={categories => <CustomDrawer {...categories} />} 
    screenOptions={{
      swipeEdgeWidth: 0,
      headerShown: false,
      drawerActiveBackgroundColor: "#f0f0f0",
      drawerLabelStyle: {
        fontSize: 20,
        color: "black",
      },
    }}
  >
    <Drawer.Screen name="HOME" component={AuthNavigation} />
    <Drawer.Screen name="NEW IN" component={NewIn} />
    <Drawer.Screen name="SPRING SALE" component={SpringSale} />
    <Drawer.Screen name="ALL PRODUCTS" component={ItemStack} />
    <Drawer.Screen name="DRESSES" component={Dresses} />
    <Drawer.Screen name="TROUSERS" component={Trousers} />
    <Drawer.Screen name="SKIRTS" component={Skirts} />
    <Drawer.Screen name="KNITWEAR" component={Knitwear} />
    <Drawer.Screen name="SHIRTS" component={Shirts} />
    <Drawer.Screen name="COATS" component={Coats} />
    <Drawer.Screen name="ACCESSORIES" component={Accessories} />
  </Drawer.Navigator>
  )
}

export default DrawerNavigation