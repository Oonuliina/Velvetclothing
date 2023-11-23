import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import AllProducts from './screens/ProductsScreen';
import CustomDrawer from './components/CustomDrawer';
import NewIn from './screens/navigationScreens/NewInScreen'
import SpringSale from './screens/navigationScreens/SpringSaleScreen'
import Dresses from './screens/navigationScreens/DressesScreen'
import Trousers from './screens/navigationScreens/TrousersScreen'
import Skirts from './screens/navigationScreens/SkirtsScreen'
import Knitwear from './screens/navigationScreens/KnitwearScreen'
import Shirts from './screens/navigationScreens/ShirtsScreen'
import Coats from './screens/navigationScreens/CoatsScreen'
import Accessories from './screens/navigationScreens/AccessoriesScreen'
import LoginScreen from './screens/LoginScreen'
import { useState } from 'react';
import { ProductProvider } from './Firebase/Context/productContext';
import Product from './components/Product';
import ProductScreen from './screens/ProductScreen';
import Shopping from './screens/ShoppingBagScreen'
import { BagProvider } from './Firebase/Context/bagContext';
import { AuthProvider } from './Firebase/Context/authContext';
import { RootSiblingParent } from 'react-native-root-siblings';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [products, setProducts] = useState(null)
  const [currentProduct, setCurrentProduct] = useState(null)
  const [bagItems, setBagItems] = useState(null)


  return (
    <RootSiblingParent>
    <AuthProvider value={{isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser}}>
    <ProductProvider value={{products, setProducts, currentProduct, setCurrentProduct}}>
      <BagProvider value={{bagItems, setBagItems}}>
    <NavigationContainer>
      <StatusBar style="dark" />
      <Drawer.Navigator
        drawerContent={categories => <CustomDrawer {...categories} />} 
        screenOptions={{
          drawerActiveBackgroundColor: "#f0f0f0",
          drawerLabelStyle: {
            fontSize: 20,
            color: "black",
          },
        }}
      >
        <Drawer.Screen name="HOME" component={HomeScreen} />
        <Drawer.Screen name="NEW IN" component={NewIn} />
        <Drawer.Screen name="SPRING SALE" component={SpringSale} />
        <Drawer.Screen name="ALL PRODUCTS" component={AllProducts} />
        <Drawer.Screen name="DRESSES" component={Dresses} />
        <Drawer.Screen name="TROUSERS" component={Trousers} />
        <Drawer.Screen name="SKIRTS" component={Skirts} />
        <Drawer.Screen name="KNITWEAR" component={Knitwear} />
        <Drawer.Screen name="SHIRTS" component={Shirts} />
        <Drawer.Screen name="COATS" component={Coats} />
        <Drawer.Screen name="ACCESSORIES" component={Accessories} />
        <Drawer.Screen name="Product" component={ProductScreen} />
        <Drawer.Screen name="Shopping Bag" component={Shopping} />
        <Drawer.Screen name="LOGIN" component={LoginScreen} />  
      </Drawer.Navigator>
    </NavigationContainer>
    </BagProvider>
    </ProductProvider>
    </AuthProvider>
    </RootSiblingParent>
  );
}
