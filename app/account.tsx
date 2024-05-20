import React, { useState } from 'react'
import { Button, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import style from './style'
import { View } from 'react-native'

function Account() {
  const [username,setusername] = useState("")
  const [password,setpassword] = useState("")
  return (
    <ImageBackground source={require('./bg.jpg')} resizeMode="cover" style={{flex:1,justifyContent:"center"}}>
  <ScrollView   >
  
    <View style={style. login}>
 <Text style={style.logintext}>Login to your spotify account</Text>
 <Text style={style.label}>Username</Text>
 <TextInput style={style.username} onChange={newtext => setusername(newtext)}></TextInput>
 <Text style={style.label}>password</Text>
 <TextInput style={style.username} onChange={newtext => setpassword(newtext)}></TextInput>
<TouchableOpacity style={style.button}>
 <Text style={style.submit}>Submit</Text>
</TouchableOpacity>
</View>


  </ScrollView>
  </ImageBackground>
  )
}

export default Account
