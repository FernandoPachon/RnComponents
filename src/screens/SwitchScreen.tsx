import React, { useState } from 'react'
import { View,Text,StyleSheet, Switch, Platform } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';


export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);
  return (
<View style={styles.container}>
  <HeaderTitle title='Switches'/>
<Switch
        trackColor={{ false: "#D9D9DB", true: "#03DD00" }}
        thumbColor={(Platform.OS === 'android') ? '#FFFFF' : ''}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginHorizontal:20
    },
});
export default SwitchScreen;
