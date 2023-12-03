import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import newsletter from '../assets/Newsletter.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const CustomDrawer = (pages) => {
  return (
    <View className="flex-1"> 
    <DrawerContentScrollView {...pages}>
        <DrawerItemList {...pages} />
        <Image
            source={newsletter} 
            className="bg-gray-300 mb-4 align-self: flex-start"
          />
          <View className="flex-row justify-center">
          <View className="pr-8 my-2">
            <FontAwesomeIcon icon={faPinterest} size={25}/>
          </View>
          <View className="px-8 my-2">
            <FontAwesomeIcon icon={faInstagram} size={25} />
          </View>
          <View className="pl-8 my-2">
          <FontAwesomeIcon icon={faEnvelope} size={25}/>
          </View>
        </View>
        <View className="m-5">
          <Text className="py-2">About Velvet Clothing</Text>
          <Text className="py-2">Contact</Text>
          <Text className="py-2">Customer service</Text>
          <Text className="py-2">Size guide</Text>
          <Text className="py-2">Newsletter</Text>
          <Text className="py-2">Privacy policy</Text>
        </View>
    </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer