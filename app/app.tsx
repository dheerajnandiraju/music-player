import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Index from "./index";
import account from "./account";
const stack=createNativeStackNavigator()

export default function app() {
    return(
        <NavigationContainer>
            <stack.Navigator initialRouteName="home">
                <stack.Screen name='home' component={Index}/>
                <stack.Screen name= 'account' component={account}/>
            </stack.Navigator>
        </NavigationContainer>
    )
    
}