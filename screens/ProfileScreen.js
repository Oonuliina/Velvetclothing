import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ProfileScreen = () => {
  return (
    <SafeAreaView>
        <View className="m-10">
          <Text className="text-2xl font-bold pb-3">PROFILE</Text>
          <Text className="text-lg py-2">NAME</Text>
          <Text>User full name here</Text>   
          <Text className="text-lg py-2">E-MAIL</Text>
          <Text>User email address here</Text>   
        </View>
        <View>
          <TouchableOpacity>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default ProfileScreen