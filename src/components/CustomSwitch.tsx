import React, { useState } from 'react'
import {View, Text, StyleSheet, Switch, Platform} from 'react-native';

interface Props {
    isOn:boolean;
    onChange:(value:boolean)=>void
}

export const CustomSwitch = ({isOn,onChange}:Props) => {
    const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    };
   

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: '#03DD00'}}
      thumbColor={Platform.OS === 'android' ? '#FFFFF' : ''}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default CustomSwitch;
