import PostScreen from "../screens/postscreen";
import BottomTabNavigator from "./TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
function App(){
  return(
   <NavigationContainer>
   <Stack.Navigator initialRouteName = "Home"
                    screenOptions = {{ headerShown : false}}>
  <Stack.Screen name = "Home" component = {BottomTabNavigator}/>
  <Stack.Screen name = "PostScreen" component = {PostScreen}/>
  
  </Stack.Navigator>
  </NavigationContainer>
  );
}
  export default App;