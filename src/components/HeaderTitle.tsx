import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props{
    title:string;
}

export const HeaderTitle = ({title}:Props) => {
    const {top}=useSafeAreaInsets()
    return(
        <View style={{marginTop:top + 20,marginBottom:20}}>
           <Text style={styles.title}>{title}</Text>
        </View>
      )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:20
      },
      title:{
        fontSize:35,
        fontWeight:'bold',
        color:'#03DD00'
    },
    globalMargin:{
      marginHorizontal:20
    }
});
export default HeaderTitle;
