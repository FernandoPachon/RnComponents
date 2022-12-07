import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

interface MenuItem{
  name: string,
  icon: string,
  component: string,
}

const menuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];
const HomeScreen = () => {

  const {top}=useSafeAreaInsets()

  const renderMenuItem = (menuItem:MenuItem)=>{
    return (
      <View>
          <Text>{menuItem.name}-{menuItem.icon}</Text>
      </View>
    )
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
      renderItem={({item}) => renderMenuItem(item)}
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
