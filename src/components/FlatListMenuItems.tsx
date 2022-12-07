
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces/appInterfaces';
interface Props {
  menuItem: MenuItem;
}
export const FlatListMenuItems = ({menuItem}: Props) => {

   const navigation = useNavigation<any>();
   const  {component}=menuItem

  return (
    <TouchableOpacity 
    activeOpacity={0.8}
    onPress={()=> navigation.navigate(component)}
    >
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="gray" size={20} />
        <Text style={styles.itemText}>
          {menuItem.name}-{menuItem.icon}
        </Text>
        <View style={{flex: 1}} />
        <Icon name="caret-forward-outline" color="gray" size={20} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 5,
    fontSize: 19,
  },
});
export default FlatListMenuItems;
