import React from 'react'
import { Button, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import style from './style'
import { View } from 'react-native'

function Account() {
  return (
  <ScrollView style={style.screen2}>
    <View style={style. login}>
 <Text style={style.logintext}>Login to your spotify account</Text>
 <Text style={style.label}>Username</Text>
 <TextInput style={style.username}></TextInput>
 <Text style={style.label}>password</Text>
 <TextInput style={style.username}></TextInput>
<TouchableOpacity style={style.button}>
 <Text style={style.submit}>Submit</Text>
</TouchableOpacity>
</View>

  </ScrollView>
  )
}

export default Account
