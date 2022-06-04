import createDrawerNavigator from '@react-navigation/drawer'
import React from 'react'
import TabNavigator from "./TabNavigator";
import Profile from "../screens/profile"
import App from './StackNavigator';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component = {App}/>
            <Drawer.Screen name = "Profile" component = {Profile}/>

        </Drawer.Navigator>
    
    );
};
export default DrawerNavigator;