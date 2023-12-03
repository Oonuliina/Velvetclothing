import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect , useContext }  from 'react'
import newIn from "../assets/newIn.png"
import springsale2 from "../assets/Springsale2.png"
import TopNavigation from "../components/TopNavigation"
import Footer from "../components/Footer"
import AuthContext from '../Firebase/Context/authContext'
import { Bars3Icon, UserIcon, ShoppingBagIcon } from 'react-native-heroicons/outline'
import { useFonts } from 'expo-font'
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons'

const HomeScreen = ({navigation}) => {

  const {currentUser} = useContext(AuthContext)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
      <SafeAreaView edges={['top', 'left', 'right']} className="bg-white">
        <TopNavigation />
        <ScrollView showsVerticalScrollIndicator="false">
          <View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              </TouchableOpacity>  
            </View>
            <View>
              <Text className="text-lg mx-5 mb-2"></Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("NEW IN")}>
              <Image source={newIn} className="mb-4" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("SPRING SALE")}>
              <Image source={springsale2} className="mb-4" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}

export default HomeScreen