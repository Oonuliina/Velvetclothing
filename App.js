import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { ProductProvider } from './Firebase/Context/productContext';
import { BagProvider } from './Firebase/Context/bagContext';
import { AuthProvider } from './Firebase/Context/authContext';
import { RootSiblingParent } from 'react-native-root-siblings';
import DrawerNavigation from './Navigation/DrawerNavigation';



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
              <DrawerNavigation />
            </NavigationContainer>
        </BagProvider>
        </ProductProvider>
      </AuthProvider>
    </RootSiblingParent>
  );
}