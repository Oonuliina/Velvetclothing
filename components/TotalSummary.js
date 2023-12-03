import { View, Text } from 'react-native'
import React from 'react'

const TotalSummary = ({total}) => {

    const subtotal = total + 5

  return (
    <View>
        <View className=" mx-3 py-5 border-t border-solid border-black">
            <View className="flex-row">
                <Text className="flex-auto text-base">Order value</Text>
                <Text className="text-base">{total} €</Text>
            </View> 
            <View className="flex-row">
                <Text className="flex-auto text-base">Shipping</Text>
                <Text className="text-base">5 €</Text>
            </View>
        </View>
        <View className=" mx-3 pt-5 pb-10 border-t border-solid border-black">
            <View className="flex-row">
                <Text className=" flex-auto text-lg">Subtotal</Text>
                <Text className="text-lg">{subtotal} €</Text>
            </View>
        </View>
    </View>
  )
}

export default TotalSummary