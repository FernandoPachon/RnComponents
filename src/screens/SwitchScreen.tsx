import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, Platform} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import { styleScreen } from '../theme/appTheme';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHappy: true,
    isHungry: false,
  });
  const {isActive, isHungry, isHappy} = state;
  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  return (
    <View style={styles.container}>
      <HeaderTitle title="Switches" />
      <View style={styleScreen.switchRow}>
        <Text style={styleScreen.switchText}>IsActive</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={styleScreen.switchRow}>
        <Text style={styleScreen.switchText}>isHappy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <View style={styleScreen.switchRow}>
        <Text style={styleScreen.switchText}>isHungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <Text style={styleScreen.switchText}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  }
});
export default SwitchScreen;
