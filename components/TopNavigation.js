import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Bars3Icon, UserIcon, ShoppingBagIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font'


const TopNavigation = () => {
const navigation = useNavigation()
const [loaded] = useFonts({
  Gloock: require('../assets/fonts/Gloock-Regular.ttf') 
})

if(!loaded) {
  return null
}
  
  return (
      <View className="flex-row items-center mx-4 pb-4 space-x-2">
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Bars3Icon size={30} color="black" />
        </TouchableOpacity>
        <View className="flex-1 items-center">
          <Text className="text-3xl text-black pl-10" style={{fontFamily: "Gloock"}}>
            Velvet
          </Text>
        </View>  
            <UserIcon size={30} color="black" onPress={() => navigation.navigate("Login")} />
            <ShoppingBagIcon size={30} color="black" onPress={() => navigation.navigate("Bag")} />
      </View>
  )
}

export default TopNavigation