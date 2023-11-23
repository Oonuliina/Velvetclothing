import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <View className="items-center pb-20">
        <View className="flex-row m-4 border-y border-solid border-black px-28">
          <View className="p-2 my-2">
            <FontAwesomeIcon icon={faPinterest} size={25}/>
          </View>
          <View className="p-2 my-2">
            <FontAwesomeIcon icon={faInstagram} size={25} />
          </View>
          <View className="p-2 my-2">
          <FontAwesomeIcon icon={faEnvelope} size={25}/>
          </View>
        </View>
        <View className="items-center  border-b border-solid px-24 border-black">
          <Text className="py-4 p-2">About Velvet Clothing</Text>
          <Text className="py-4">Contact</Text>
          <Text className="py-4">Customer service</Text>
          <Text className="py-4">Size guide</Text>
          <Text className="py-4">Newsletter</Text>
          <Text className="py-4">Privacy policy</Text>
        </View>
        <Text className="py-4"> © Velvet Clothing Oy 2023</Text>
    </View>         
  )
}

export default Footer