import React, { useRef} from 'react'
import { View,Easing,StyleSheet, Animated,Button } from 'react-native'
import { useAnimation } from '../hooks/useAnimation';


export const Animation101Screen = () => {
    const {opacity,position,fadeIn,fadeOut,startMovingPosition}=useAnimation()
  return (
<View style={styles.container}>
<Animated.View style={{
    ...styles.redBox,
    opacity,
    transform:[{
        translateY:position
    }]
    }}/>
     <Button
     title="FadeIn"
     onPress={()=>{
        fadeIn();
        startMovingPosition(-100)
    }}
     />
     <View style={{margin:5}}/>
     <Button
    
     title="FadeOut"
     onPress={fadeOut}
     />
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
