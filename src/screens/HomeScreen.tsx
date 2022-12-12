import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FlatListMenuItems from '../components/FlatListMenuItems';
import { menuItems } from '../data/menuItems';
import { MenuItem } from '../interfaces/appInterfaces';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';




const HomeScreen = () => {


  return (
    <View style={styles.container}>

     

      <FlatList 
      data={menuItems} 
      renderItem={({item}) =><FlatListMenuItems menuItem={item}/>}
      keyExtractor={(item)=>item.name}
      ListHeaderComponent={()=><HeaderTitle title='Opciones de menú'/>}
      ItemSeparatorComponent={ItemSeparator}
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
