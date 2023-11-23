import { View, Text, Image } from 'react-native'
import React from 'react'
import FloradDress from '../assets/FloralDress.png'

const Product = ({title, image, price}) => {
  return (
    <View className=" items-center m-2.5">
        <Image source={{uri: image}} width={173} height={249} />
        <Text className="pt-2">{title}</Text>
        <Text>{price} €</Text>
    </View>
  )
}

export default Product