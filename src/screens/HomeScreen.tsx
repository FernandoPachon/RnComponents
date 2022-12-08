import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FlatListMenuItems from '../components/FlatListMenuItems';
import { menuItems } from '../data/menuItems';
import { MenuItem } from '../interfaces/appInterfaces';




const HomeScreen = () => {

  const {top}=useSafeAreaInsets()

  const renderMenuItem = (menuItem:MenuItem)=>{
   
  }
  const renderListHeader=()=>{
    return(
      <View style={{marginTop:top + 20,marginBottom:20}}>
         <Text style={styles.title}>Opciones de Menú</Text>
      </View>
    )
  }

  const itemSeparator=()=>{
    return(
      <View
        style={{
          borderBottomWidth:1,
          opacity:0.4,
          marginVertical:8
        }}
      >

      </View>
    )
  }
  return (
    <View style={styles.container}>

     

      <FlatList 
      data={menuItems} 
      renderItem={({item}) =><FlatListMenuItems menuItem={item}/>}
      keyExtractor={(item)=>item.name}
      ListHeaderComponent={()=>renderListHeader()}
      ItemSeparatorComponent={itemSeparator}
       />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:20
  },
  title:{
    fontSize:35,
    fontWeight:'bold',
},
globalMargin:{
  marginHorizontal:20
}
});
export default HomeScreen;
