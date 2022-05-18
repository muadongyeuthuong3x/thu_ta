import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListUser from '../Screen/ListUser'
import { StyleSheet, Text, View } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ItemUserChat from '../Screen/ItemUserChat'

const Tab = createBottomTabNavigator();

function TabBottom({navigation}) {
  console.log(navigation)
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false
      }}
      screenOptions={{
        showLabel: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: 60
        },
        headerShown: false
      }}
    >
      <Tab.Screen name="User"
        component={ListUser}
        navigation={navigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.user}>
              <FontAwesome
                name="user"
                color={focused ?"#0969da":"#373c41c4"}
                size={20}
              />
              <Text style={{
                 fontSize:20,
                 color:focused ?"#0969da":"#373c41c4",
                 fontWeight:'500'
              }}>User</Text>
            </View>
          )
        }}
      />
   
      <Tab.Screen name="setting" component={ItemUserChat} 
         options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.user}>
              <Icon
                name="user"
                color={focused ?"#0969da":"#373c41c4"}
                size={20}
              />
              <Text style={{
                 fontSize:20,
                 color:focused ?"#0969da":"#373c41c4",
                 fontWeight:'500'
              }}>Profile</Text>
            </View>
          )
        }} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  user: {
    alignItems: 'center',
    justifyContent: 'center',
    top:3,
  },
  textBottom:{
    fontSize:20,
    color:"#003153",
    fontWeight:'500'
  }
})

export default TabBottom;