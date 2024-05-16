import React from "react";
import { ScrollView, View, StatusBar, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from "react-native";
import style from './style.js';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Index  () {
    const navigation = useNavigation()
    const settings = () => {
        console.log("pressed")
    }
    console.log('Index component rendered');

    return (
        <ScrollView style={style.screen}>
            <StatusBar hidden={true} />
            <View style={style.circle1}></View>
            <View style={style.circle2}></View>
           <TouchableNativeFeedback onPress={()=>navigation.navigate("account")}>
                <View  style={style.account}>
                    <AntDesign name="user" size={30} color="white" />
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={settings}>
            <View style={style.settings}>
                <Feather name="settings" size={24} color="white" />
            </View>
            </TouchableNativeFeedback>
            
            <View style={style.recommended}>
            
            </View>
        </ScrollView>
    );
}


