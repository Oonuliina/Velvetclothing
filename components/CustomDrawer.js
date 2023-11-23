import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import newsletter from '../assets/Newsletter.png'

const CustomDrawer = (pages) => {
  return (
    <DrawerContentScrollView {...pages}>
        <DrawerItemList {...pages} className="" />
        <Image
            source={newsletter} 
            className="bg-gray-300 mb-4 align-self: flex-start"
          />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer