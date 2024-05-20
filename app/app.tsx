import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Index from "./Index";
import Account from "./account";
import { View } from "react-native";
import bottom from "./bottom";
const stack=createNativeStackNavigator()

export default function app() {
    return(
      
        <NavigationContainer independent={true}>
            <stack.Navigator 
            
            screenOptions={{
              
                headerStyle: {
                    
                  backgroundColor: '#000000', 
                },
                headerTintColor: '#fff', 
                headerTitleStyle: {
                  fontWeight: 'bold', 
                  fontSize:17
                },
              }}
            initialRouteName="Login">
                <stack.Screen name='Home' component={Index}/>
                <stack.Screen name='Main' component={bottom} options={{headerShown:false}}/>
                <stack.Screen name= 'Login' component={Account}/>
                <stack.Screen name="*" component={Index}/>
              
            </stack.Navigator>
        </NavigationContainer>
        
    )
    
}