import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { async } from '@firebase/util'
import { getProductById } from '../Firebase/producs'
import ProductContext from '../Firebase/Context/productContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopNavigation from '../components/TopNavigation'
import Footer from '../components/Footer'
import { ScrollView } from 'react-native-gesture-handler'
import { addToBag } from '../Firebase/bag'
import BagContext from '../Firebase/Context/bagContext'

const ProductScreen = ({navigation, route}) => {
    const {currentProduct: product, setCurrentProduct} = useContext(ProductContext)
    const {setBagItems} = useContext(BagContext)
    const [qty, setQty] = useState(1)
    const id = route.params.productId


    const addItemToBag = async(id) => {
        const res = await addToBag(id, qty)
        if(res.success === true) {
            console.log("Jee tuotteet kärryssä")
            setBagItems(res.data)
        } else {
            console.log("wtf")
        }
    }
    const increment = () => {
        setQty(prev => prev + 1)
    }

    const decrement = () => {
        if(qty > 1) {
            setQty(prev => prev - 1)
        }
    }

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
        
    },[])

    const fetchProductById = async(id) => {
        const result = await getProductById(id)
        setCurrentProduct(result)
    }

    useEffect(() => {
        fetchProductById(id)
    },[id])

  return (
    <SafeAreaView className="bg-white">
        <TopNavigation />
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
            <Footer />
        </ScrollView>
    </SafeAreaView>
  )
}

export default ProductScreen