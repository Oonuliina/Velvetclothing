import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopNavigation from '../components/TopNavigation'
import Footer from '../components/Footer'
import { ScrollView } from 'react-native-gesture-handler'
import Product from '../components/Product'
import { getProducts } from '../Firebase/producs'
import ProductContext from '../Firebase/Context/productContext'

const ProductsScreen = () => {
  const navigation = useNavigation()
  const {products, setProducts} = useContext(ProductContext)

  const fetchAllProducts = async() => {
    const result = await getProducts()
    setProducts(result)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
    fetchAllProducts()
  }, [])


  return (
    <SafeAreaView className="bg-white">
      <TopNavigation />
      <Text className="mb-3 ml-3 text-lg">ALL PRODUCTS</Text>
      <ScrollView className="">
        <View className="flex-wrap flex-row">
          {products?.map(product =>
          <TouchableOpacity key={product.id} onPress={() => navigation.navigate("Product", {
            productId: product.id  
          })}>
            <Product 
              title={product.prodTitle}
              image={product.prodImage}
              price={product.prodPrice} 
            />
          </TouchableOpacity>  
          )}
        </View>
         <Footer />
      </ScrollView>     
    </SafeAreaView>
  )
}

export default ProductsScreen