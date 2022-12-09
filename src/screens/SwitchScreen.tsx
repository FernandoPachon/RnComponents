import React, { useState } from 'react'
import { View,Text,StyleSheet, Switch, Platform } from 'react-native'
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';


export const SwitchScreen = () => {

  const [state,setState]=useState({
    isActive:true,
    isHungry:false,
    isHappy:true
  })
  const {isActive,isHungry,isHappy}=state;
  const onChange=(value:boolean, field:string) =>{
    setState({
      ...state,
      [field]:value
    })
  }
  return (
<View style={styles.container}>
  <HeaderTitle title='Switches'/>
  <View style={styles.switchRow}>
    <Text style={styles.switchText}>IsActive</Text>
  <CustomSwitch isOn={isActive} onChange={(value)=>onChange (value,'isActive')}/>
  </View>
  <Text style={styles.switchText}>{JSON.stringify(state,null,5)}</Text>
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginHorizontal:20
    },
    switchText:{
      fontSize:25
    },
    switchRow:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
  
});
export default SwitchScreen;
