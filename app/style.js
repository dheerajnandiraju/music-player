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
    marginTop:'40%',
    padding:'3%',
    display:"flex",
    flex:1,
    alignSelf:"center",
    height: '100%',
    width:'80%',
 backgroundColor:"#535353",
 borderWidth:1,
 borderColor:"white",
 borderRadius:10,
 opacity:1,
 
},

label:{
    
    fontSize:10,
    color:"white"
},

username:{
    marginBottom:'5%',
    marginTop:'2%',
    borderWidth:1,
    borderColor:"white",
    borderRadius:10,
    padding:5,
    color:"white",
},

logintext:{
    textAlign:'center',
    fontSize:12,
    color:"white",
    marginBottom:'10%',
},

screen2:{
    backgroundColor:"black",
    color:"white",
  
},

button:{
    alignSelf:"center",
    height:'13%',
    width:'50%',
    backgroundColor:"#1db954",
    borderWidth:1,
    borderColor:"white",
    borderRadius:10,
},

submit:{
    fontSize:15,
   marginTop:0,
    textAlign:"center",
color:"white",
}
    
})

export default style