import React, { useRef} from 'react'
import { View,Text,StyleSheet, Animated } from 'react-native'


export const Animation101Screen = () => {
const opacity=useRef( new Animated.Value(0.4)).current;
  return (
<View style={styles.container}>
<Animated.View style={{
    ...styles.redBox,
    opacity: opacity
    }}/>
     <Text>Animation101Screen </Text>
</View>
 )
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
    },
    redBox:{
        backgroundColor:"#FB0101",
        width:150,
        height:150
    }
});
export default Animation101Screen;
