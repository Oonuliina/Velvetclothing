import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect , useContext }  from 'react'
import newIn from "../assets/newIn.png"
import springsale2 from "../assets/Springsale2.png"
import TopNavigation from "../components/TopNavigation"
import Footer from "../components/Footer"
import AuthContext from '../Firebase/Context/authContext'

const HomeScreen = () => {
  const {currentUser} = useContext(AuthContext)

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
      <SafeAreaView className="bg-white">
        <TopNavigation />
        <ScrollView>
          <View>
            <View>
              <Text className="text-lg mx-5 mb-2"> {currentUser?.name}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("NEW IN")}>
              <Image source={newIn} className="mb-4" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("SPRING SALE")}>
              <Image source={springsale2} className="mb-4" />
            </TouchableOpacity>
          </View>
        <Footer />
        </ScrollView>
      </SafeAreaView>
  )
}

export default HomeScreen