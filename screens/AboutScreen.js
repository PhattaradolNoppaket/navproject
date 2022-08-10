import { View, Text ,StyleSheet ,Button} from 'react-native'
import React from 'react'


const AboutScreen = ({route}) => {
    // const {email} = route.params;
  return (
      <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>About sc</Text>
      {/* <Text>Email : {email}</Text> */}
      <Text>Email : {route.params.email}</Text>
      </View>
  )
}

export default AboutScreen