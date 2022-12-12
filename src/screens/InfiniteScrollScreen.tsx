import React, { useState } from 'react'
import { View,Text,StyleSheet, FlatList, Image,ActivityIndicator } from 'react-native'
import FadeInImage from '../components/FadeInImage';
import HeaderTitle from '../components/HeaderTitle';


export const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0,1,2,3,4,5])

  const loadMore = ()=>{
    const newArray:number[]=[];
    for(let i=0;i<5;i++){
      newArray[i]=numbers.length+i
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
  }, 1500 );
  }
  const renderItem = (item: number) => {
    console.log(`${item} ===>>` );
    
    return (
     
        <FadeInImage 
            uri={ `https://picsum.photos/id/${ item }/1024/1024` }
            style={{
                width: '100%',
                height: 400
            }}
        />
   
        );
     /*    <Image
          source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
          style={{ height: "100%", width: 400 }}
        /> */
  };
  return (
<View style={styles.container}>
     
     <FlatList
        data={numbers}
        keyExtractor={(item)=> item.toString()}
        renderItem={({item})=>renderItem(item)}
        ListHeaderComponent={()=>(
          <View style={{marginHorizontal:20}}>
              <HeaderTitle title='Infinite scroll'/>
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}

        ListFooterComponent={ () => (
          <View style={{
              height: 150,
              width: '100%',
              justifyContent:'center',
              alignItems: 'center'
          }}>
              <ActivityIndicator size={ 25 } color="#5856D6" />
          </View>
      ) }
     />
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor:"grey"
    },
    textItem:{
      backgroundColor:'white',
      height:150

    }
});
export default InfiniteScrollScreen;
