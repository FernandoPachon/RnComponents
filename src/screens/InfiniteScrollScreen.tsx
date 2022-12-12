import React, { useState } from 'react'
import { View,Text,StyleSheet, FlatList } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';


export const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0,1,2,3,4,5])

  const loadMore = ()=>{
    const newArray:number[]=[];
    for(let i=0;i<5;i++){
      newArray[i]=numbers.length+i
    }
    setNumbers([...numbers,...newArray])
  }
  const renderItem=(item:number)=>{
    return(
      <Text style={styles.textItem}>{item}</Text>
    )
  }
  return (
<View style={styles.container}>
     
     <FlatList
        data={numbers}
        keyExtractor={(item)=> item.toString()}
        renderItem={({item})=>renderItem(item)}
        ListHeaderComponent={<HeaderTitle title='Infinite Scroll'/>}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
     />
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor:"#931717"
    },
    textItem:{
      backgroundColor:'#C4C4C4',
      height:150

    }
});
export default InfiniteScrollScreen;
