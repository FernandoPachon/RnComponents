import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { Platform } from 'react-native';
import { useForm } from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';
import { styleScreen } from '../theme/appTheme';

export const TextImputScreen = () => {
 
    const {onChange,form,isSubscribed}= useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed:false
      });
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS==="ios" ? "padding" : "height"}
    >
    <ScrollView>
      <View style={styles.container}>
        <HeaderTitle title="TextImputs" />
        <TextInput
          style={styles.imputStyle}
          placeholder="Ingrese su nombre"
          autoCorrect={false}
          autoCapitalize="words"
          onChangeText={value => onChange(value, 'name')}
        />
        <TextInput
          style={styles.imputStyle}
          placeholder="Ingrese su email"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={value => onChange(value, 'email')}
          keyboardType="email-address"
        />
        <View style={styleScreen.switchRow}>
        <Text style={styleScreen.switchText}>Suscribirse</Text>
        <CustomSwitch
          isOn={isSubscribed}
          onChange={value => onChange(value, 'isSubscribed')}
        />
      </View>
        <HeaderTitle title={JSON.stringify(form, null, 3)} />
        <HeaderTitle title={JSON.stringify(form, null, 3)} />
        <TextInput
          style={styles.imputStyle}
          placeholder="Ingrese su teléfono"
          autoCorrect={false}
          onChangeText={value => onChange(value, 'phone')}
          keyboardType="phone-pad"
        />
       <View style={{height:100}}/>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  imputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});
export default TextImputScreen;
