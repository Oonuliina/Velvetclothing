import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { async } from '@firebase/util'
import { getProductById } from '../Firebase/producs'
import ProductContext from '../Firebase/Context/productContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopNavigation from '../components/TopNavigation'
import Footer from '../components/Footer'
import { addToBag } from '../Firebase/bag'
import BagContext from '../Firebase/Context/bagContext'
import { Feather } from '@expo/vector-icons';

const ProductScreen = ({navigation, route}) => {
    const {currentProduct: product, setCurrentProduct} = useContext(ProductContext);
    const {setBagItems}=useContext(BagContext) 
    const id = route.params.productId;

    const [qty,setQty] = useState(1);

    const increment = () => {
        setQty(prev => prev + 1)
    }
    const decrement = () => {
        if(qty > 1) {
        setQty( prev => prev - 1)
        }
    }

    const addItemToBag = async() => {
        const res = await addToBag(id,qty)
        if(res.success===true){
        /* ToastAndroid.show("item added to bag",ToastAndroid.BOTTOM) */
        setBagItems(res.data)
        }
    }

    const fetchProductById = async(id) => {
        const result = await getProductById(id)
        setCurrentProduct(result)
    }

    useEffect(() => {
        fetchProductById(id)
    },[id])

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
        
    },[])

  return (
    <SafeAreaView className="bg-white flex-1">
        <View>
          <TouchableOpacity className="flex-row m-3" onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" size={30} color="black" />
            <Text className="text-lg">BACK TO ALL PRODUCTS</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
            <Image source={{uri: product?.prodImage}} width={400} height={500} />
            <View className="flex-row m-5 ">
                <Text className="flex-auto text-lg">{product?.prodTitle}</Text>
                <Text className="text-lg">{product?.prodPrice} €</Text>
            </View>
            <View className="flex-row">
                <TouchableOpacity onPress={decrement} className="mx-5 mb-5">
                    <Text className="text-lg">-</Text>
                </TouchableOpacity>
                <Text className="text-lg">{qty}</Text>   
                <TouchableOpacity onPress={increment} className="mx-5 mb-5">
                    <Text className="text-lg">+</Text>
                </TouchableOpacity>
            </View>
            <View>    
                <TouchableOpacity 
                    onPress={addItemToBag} 
                    className="bg-black py-2 items-center mx-5"
                >
                    <Text className="text-xl  text-white">ADD TO BAG</Text>
                </TouchableOpacity>
            </View>    
            <View className="m-5">
                <Text className="text-base">    
                   {product?.prodDescription}
                </Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default ProductScreen