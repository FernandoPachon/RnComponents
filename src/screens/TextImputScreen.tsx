import React from 'react'
import { View,Text,StyleSheet,TextInput } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';


export const TextImputScreen = () => {
  return (
<View style={styles.container}>
     <HeaderTitle title='TextImputs'/>
     <TextInput
        style={styles.imputStyle}
     />
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginHorizontal:20
    },
    imputStyle:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.3)',
        height:50,
        paddingHorizontal:10,
        borderRadius:10
    }
});
export default TextImputScreen;
