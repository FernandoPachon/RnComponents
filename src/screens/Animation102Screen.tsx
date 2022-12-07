import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { style } from '../theme/appTheme';


export const Animation102Screen = () => {
  return (
<View style={styles.container}>
    <View style={styles.purpleBox}/>
     <Text>Animation102Screen </Text>
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    purpleBox:{
        backgroundColor:"#AB01FB",
        width:150,
        height:150
    }
});
export default Animation102Screen;
