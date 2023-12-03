import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
import { LockClosedIcon, UserIcon, ChevronRightIcon, EnvelopeIcon } from 'react-native-heroicons/outline'
import bgimage from '../assets/bgLogin.png'
import { loginWithEmailAndPassword, registerWithNameEmailAndPassword } from '../Firebase/userAuth'
import { async } from '@firebase/util'
import AuthContext from '../Firebase/Context/authContext'
import Toast from 'react-native-root-toast'

const LoginScreen = () => {
    const navigation = useNavigation()

    const [type, setType] = useState("login")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState("false")

    const {currentUser, setCurrentUser, setIsLoggedIn} = useContext(AuthContext)

    const handleLogin = async() => {
        const res = await loginWithEmailAndPassword(email, password)
        if(res.success === true) {
            setCurrentUser(res.user)
            setIsLoggedIn(true)
            Toast.show('Logged in successfully!', {
                duration: Toast.durations.LONG,
                position: Toast.positions.TOP,
              })
            navigation.navigate("Home")
        }
    }

    const handleRegister = async() => {
        const res = await registerWithNameEmailAndPassword(name, email, password)
        if(res.success === true) {
            setType("login")
            Toast.show('Account created!', {
                duration: Toast.durations.LONG,
                position: Toast.positions.TOP,
              })
        }
    }
    
    useEffect(() => {
        if(currentUser) {
            setIsLoggedIn(true)
        }   
    }, [currentUser])

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, [])

  return (                 
    <View className="bg-slate-300">
        <View>
        <Image
            source={bgimage} 
            className="bg-gray-300 mb-4"
          />
        </View>
        {type === "login" ? (
            <View className="absolute left-12 top-40 ">
                <View className="items-center bg-white p-4 shadow" >
                    <View className="flex-row px-8">
                        <Text className="p-5 text-xl font-bold">Login</Text>
                        <TouchableOpacity>
                            <Text onPress={() => setType("register")} className="p-5 text-xl">Sign up</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row items-center space-x-2 pb-4 mx-4">
                        <View className="flex-row flex-1 space-x-2  p-3 rounded-lg border-b-2 border-solid border-black">
                            <UserIcon size={16} color={"black"}/>
                            <TextInput
                                value={email}
                                onChangeText={setEmail}
                                placeholder='E-mail'
                                keyboardType='email-address'
                                className="" 
                            />
                        </View>
                    </View>
                    <View className="flex-row items-center space-x-2 pb-4 mx-4">
                        <View className="flex-row flex-1 space-x-2  p-3 rounded-lg border-b-2 border-solid border-black">
                            <LockClosedIcon size={16} color={"black"}/>
                            <TextInput
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={true}
                                placeholder='Password'
                            />
                        </View>     
                    </View>
                    <View className="pt-5">
                        <TouchableOpacity 
                            onPress={handleLogin}
                            className=" p-3 bg-black rounded-full opacity-80"
                        >
                        <View className="flex-row">
                            <Text className="text-white px-2">Login</Text>
                            <ChevronRightIcon size={17} color={"white"}/> 
                        </View>    
                        </TouchableOpacity>
                    </View>
                    <Text className="pt-5 text-xs">Forgot password?</Text>    
                </View>
            </View>
        ) : (
            <View className="absolute left-12 top-40 ">
            <View className="items-center bg-white p-4 pb-8 shadow" >
                <View className="flex-row px-8">
                    <TouchableOpacity>
                        <Text onPress={() => setType("login")} className="p-5 text-xl">Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text onPress={() => setType("register")} className="p-5 text-xl font-bold">Sign up</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-row items-center space-x-2 pb-4 mx-4">
                    <View className="flex-row flex-1 space-x-2  p-3 rounded-lg border-b-2 border-solid border-black">
                        <UserIcon size={16} color={"black"}/>
                        <TextInput
                            value={name}
                            onChangeText={setName}
                            placeholder='Name' 
                        />
                    </View>
                </View>
                <View className="flex-row items-center space-x-2 pb-4 mx-4">
                    <View className="flex-row flex-1 space-x-2  p-3 rounded-lg border-b-2 border-solid border-black">
                        <EnvelopeIcon size={16} color={"black"}/>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder='E-mail'
                            keyboardType='email-address'
                        />
                    </View>     
                </View>
                <View className="flex-row items-center space-x-2 pb-4 mx-4">
                    <View className="flex-row flex-1 space-x-2  p-3 rounded-lg border-b-2 border-solid border-black">
                        <LockClosedIcon size={16} color={"black"}/>
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            placeholder='Password'
                        />
                    </View>     
                </View>
                <View className="pt-5">
                        <TouchableOpacity 
                            onPress={handleRegister}
                            className=" p-3 bg-black rounded-full opacity-80"
                        >
                        <View className="flex-row">
                            <Text className="text-white px-2">Sign up</Text>
                        </View>    
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
        )}
    </View>
  )
}

export default LoginScreen