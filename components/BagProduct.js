import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import dress from '../assets/FloralDress.png'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from 'react-native-heroicons/outline'
import { async } from '@firebase/util'
import { removeItemById } from '../Firebase/bag'
import BagContext from '../Firebase/Context/bagContext'
import Toast from 'react-native-root-toast'


const BagProduct = ({image, qty, title, price, id}) => {
    const {setBagItems} = useContext(BagContext)   

    const removeItem = async() => {
        const res = await removeItemById(id)
        if (res.success === true) {
            Toast.show('Item removed', {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
            })
            setBagItems(res.data)
        }
    }

  return (
    <View className="flex-row mx-3 py-5 border-t border-solid border-black">
        <View className="flex-row">
        <View className="pr-4">
            <Image source={{uri: image}} style={{width: 115, height: 136}} />
        </View>
        <View className="w-44 ">
            <Text className="text-lg">{title}</Text>
            <Text className="text-base pt-3">Qty: {qty}</Text>   
        </View>
        <View className="pl-3 items-end w-14">
            <TouchableOpacity onPress={removeItem}>
                <XMarkIcon color={"black"} />
            </TouchableOpacity>
            <Text className="pt-20 text-base text-right">{price} €</Text>
        </View>
    </View>

  </View>
  )
}

export default BagProduct