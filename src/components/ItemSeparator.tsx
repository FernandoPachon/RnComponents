import React from 'react'
import { View,Text,StyleSheet } from 'react-native'


export const ItemSeparator = () => {
  return (
<View
        style={{
          borderBottomWidth:1,
          opacity:0.4,
          marginVertical:8
        }}
      >
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
});
export default ItemSeparator;
