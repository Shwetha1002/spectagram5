import createBottomTabNavigator from '@react-navigation/bottom-tabs'
import Createpost from "../screens/CreatePost"
import Feed from "../screens/feed"
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import createMaterialBottomTabNavigator from '@react-navigation/material-bottom-tabs';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
        screenOptions = {({route}) => ({
            tabBarIcon: ({ focused, color, size}) => {
                let iconName;
                if(route.name === 'Feed'){
                    iconName = focused
                    ? 'book'
                    : 'book-outline';
                }
                else if(route.name === 'CreatePost'){
                    iconName = focused ? 'create': 'create-outline';
                }
                return <Ionicons name= {iconName} size= {size} color = {color}/>;
            },
               
            
        })}
        tabBarOptions = {{
            activeTintColor: 'red',
            inactiveTintColor : 'gray'
        }}>

<Tab.Screen name = "Feed" component = {Feed}/>
<Tab.Screen name = "Createpost" component = {Createpost}/>



        </Tab.Navigator>
    );
}

export default BottomTabNavigator;