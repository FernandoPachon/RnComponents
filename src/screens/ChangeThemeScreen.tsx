import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';


export const ChangeThemeScreen = () => {
  return (
<View style={styles.container}>
     <HeaderTitle title='Change Theme'/>
     <TouchableOpacity 
     activeOpacity={0.5}
     style={{
        backgroundColor:'#5856D6',
        width:150,
        height:50,
        borderRadius:20,
        justifyContent:'center'
        }}>
            <Text style={{
                color:'white',
                textAlign:'center',
                fontSize:22
                }}>
                Light / Dark
                </Text>
     </TouchableOpacity>
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginHorizontal: 20,
    },
});
export default ChangeThemeScreen;
