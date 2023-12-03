import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import TopNavigation from '../components/TopNavigation'
import BagProduct from '../components/BagProduct'
import BagContext from '../Firebase/Context/bagContext'
import { getBagItems } from '../Firebase/bag'
import AuthContext from '../Firebase/Context/authContext'
import { async } from '@firebase/util'
import TotalSummary from '../components/TotalSummary'

const ShoppingBagScreen = ({navigation}) => {
  const [total, setTotal] = useState()
  const {currentUser, isLoggedIn} = useContext(AuthContext)
  const {bagItems, setBagItems} = useContext(BagContext)

  const countOrderValue = async (data) => {
    const orderValue = await data.reduce(
      (acc, item) => acc + (Number(item.price) * Number(item.qty)),
      0
    )
    setTotal(orderValue)
  }

  const fetchBagItems = async () => {
    const res = await getBagItems()
    if (res.success === true) {
      setBagItems(res.data)
      setTotal(res.orderValue)
      countOrderValue(res.data)

    } 
  }


  useEffect(() => {
  fetchBagItems()  
  },[currentUser, bagItems?.length])

  return (
    <SafeAreaView className="bg-white">
      <TopNavigation />
      <View>
        <Text className="text-lg mx-5 mb-5">
          MY SHOPPING BAG
        </Text>
      </View>
      {isLoggedIn ? (
      <ScrollView>
        {bagItems?.map((item) =>
          <BagProduct 
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            qty={item.qty}
            price={item.price} 
          />
        )}
        <TotalSummary total={total} />
        <View>    
            <TouchableOpacity 
              onPress={() => {}} 
              className="bg-black py-2 items-center mx-5"
            >
              <Text className="text-xl  text-white">CHECK OUT</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
      )
      :(
        <View>
          <Text>Login to view cart</Text>
        </View>
      )
    }
    </SafeAreaView>
  )
}

export default ShoppingBagScreen