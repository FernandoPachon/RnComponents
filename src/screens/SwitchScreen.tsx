import React, { useState } from 'react'
import { View,Text,StyleSheet, Switch, Platform } from 'react-native'


export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);
  return (
<View style={styles.container}>
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
    marginTop:100
    },
});
export default SwitchScreen;
