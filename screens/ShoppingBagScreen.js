import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import TopNavigation from '../components/TopNavigation'
import Footer from '../components/Footer'
import dress from '../assets/FloralDress.png'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from 'react-native-heroicons/outline'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const ShoppingBagScreen = () => {
  const [qty, setQty] = useState(1)

  const navigation = useNavigation()

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
  return (
    <SafeAreaView className="bg-white">
      <TopNavigation />
      <Text className="text-lg mx-5 mb-5">
        MY SHOPPING BAG
      </Text>
      <ScrollView>
      <View className="flex-row mx-3 py-5 border-t-2 border-solid border-black">
        <View className="flex-row">
          <View className="pr-4">
            <Image source={dress} />
          </View>
          <View className="">
            <Text className="text-lg">Floral Dress</Text>
            <View className="flex-row py-3">
                  <TouchableOpacity onPress={decrement} className="mr-5 mb-5">
                      <ChevronLeftIcon size={24} color={"black"} />
                  </TouchableOpacity>
                  <Text className="text-base">{qty}</Text>   
                  <TouchableOpacity onPress={increment} className="ml-5 mb-5">
                  <ChevronRightIcon size={24} color={"black"} />
                  </TouchableOpacity>
            </View>
          </View>
        <View className=" pl-3 items-end ml-20 ">
        <XMarkIcon color={"black"} />
        <Text className="pt-20 text-base">110 €</Text>
        </View>
        </View>

      </View>
      <View className="flex-row mx-3 py-5 border-t-2 border-solid border-black">
        <View className="flex-row">
        <View className="pr-4">
          <Image source={dress} />
        </View>
        <View className="">
          <Text className="text-lg">Floral Dress</Text>
          <View className="flex-row py-3">
                <TouchableOpacity onPress={decrement} className="mr-5 mb-5">
                    <ChevronLeftIcon size={24} color={"black"} />
                </TouchableOpacity>
                <Text className="text-base">{qty}</Text>   
                <TouchableOpacity onPress={increment} className="ml-5 mb-5">
                <ChevronRightIcon size={24} color={"black"} />
                </TouchableOpacity>
        </View>
        </View>
        <View className=" pl-3 items-end ml-20">
        <XMarkIcon color={"black"} />
        <Text className="pt-20 text-base">110 €</Text>
        </View>
        </View>

      </View>
      <View className=" mx-3 py-5 border-t-2 border-solid border-black">
          <View className="flex-row">
            <Text className="flex-auto text-base">Order value</Text>
            <Text className="text-base">220 €</Text>
          </View>
          
        <View className="flex-row">
          <Text className="flex-auto text-base">Shipping</Text>
          <Text className="text-base">5 €</Text>
        </View>
      </View>

      <View className=" mx-3 pt-5 pb-10 border-t-2 border-solid border-black">
        <View className="flex-row">
          <Text className=" flex-auto text-lg">Subtotal</Text>
          <Text className="text-lg">225 €</Text>
        </View>
      </View>
      <Footer />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ShoppingBagScreen