import React from 'react'
import {ImageBackground, StyleSheet,Dimensions, Button} from 'react-native'
import { View, Platform } from 'react-native';



const style = StyleSheet.create({
    
  
    screen:{
        backgroundColor:"black",
        color:"white"
    },

    text:{
        color:"white"
    },
    circle1:{
        position: "absolute",
        marginTop:-10,
        marginLeft:-40,
        borderRadius:300,
        height:175,
        width: 175,
        backgroundColor:"white"
    },
    circle2:{
        position:"absolute",
        marginLeft:250,
        marginTop:-70,
        borderRadius:300,
        height:175,
        width: 175,
        backgroundColor:"white"
    },
    account:{
      flex:1,
        marginTop:10,
        marginLeft:10,
        borderRadius:20,
        height:50,
        width:50,
        backgroundColor: "#111111",
        display: "flex",
        justifyContent:"center",
        alignItems:"center"
    },

settings:{
    flex:1,
    marginTop:-50,
    marginLeft:10,
    borderRadius:20,
    height:50,
    width:50,
    backgroundColor: "#111111",
   
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"flex-end"
    
},

recommended:{
    marginTop:10,
    display:"flex",
    alignSelf:"center",
    height:150,
    width:300,
 backgroundColor:"#505050",
 borderWidth:1,
 borderColor:"white",
 borderRadius:10,
 opacity:0.9,

},

//------------login page--------

login:{
    padding:10,
    marginTop:10,
    display:"flex",
    alignSelf:"center",
    height: 300,
    width:300,
 backgroundColor:"#505050",
 borderWidth:1,
 borderColor:"white",
 borderRadius:10,
 opacity:1,
 
},

label:{
    
    fontSize:13,
    color:"white"
},

username:{
    marginBottom:10,
    marginTop:10,
    borderWidth:1,
    borderColor:"white",
    borderRadius:10,
    padding:5,
    color:"white",
},

logintext:{
    fontSize:20,
    color:"white",
    marginBottom:30,
},

screen2:{
    backgroundColor:"black",
    color:"white",
  
},

button:{
    alignSelf:"center",
    marginTop:25,
    height:30,
    width:225,
    backgroundColor:"green",
    borderWidth:1,
    borderColor:"white",
    borderRadius:10,
},

submit:{
    fontSize:20,
   marginTop:1,
    textAlign:"center",
color:"white",
}
    
})

export default style