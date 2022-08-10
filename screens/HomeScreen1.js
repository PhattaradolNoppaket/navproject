import { View, Text ,StyleSheet ,Button} from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
  return (
        <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Entypo name='drink' size={550} color='black'/>
        <Text>Home sc</Text>
        <Button 
        title='จองที่นั่ง' 
        onPress={()=>navigation.navigate('About',{
            email:'Lucus.tni.ac.th'
        })}
        />
  </View>
  )
}

export default HomeScreen