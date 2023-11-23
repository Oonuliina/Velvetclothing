import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Bars3Icon, UserIcon, ShoppingBagIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'


const TopNavigation = () => {
const navigation = useNavigation()
  
  return (
      <View className="flex-row items-center mx-4 pb-4 space-x-2">
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Bars3Icon size={30} color="black" />
        </TouchableOpacity>
        <View className="flex-1 items-center">
          <Text className="font-bold text-xl text-black pl-10">
            Velvet
          </Text>
        </View>  
            <UserIcon size={30} color="black" />
            <ShoppingBagIcon size={30} color="black" />
      </View>
  )
}

export default TopNavigation