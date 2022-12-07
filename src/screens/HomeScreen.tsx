import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
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
];
const HomeScreen = () => {

  const renderMenuItem = (menuItem:MenuItem)=>{
    return (
      <View>
          <Text>{menuItem.name}-{menuItem.icon}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList 
      data={menuItems} 
      renderItem={({item}) => renderMenuItem(item)}
      keyExtractor={(item)=>item.name}
       />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;
