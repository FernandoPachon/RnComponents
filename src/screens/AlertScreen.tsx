import React from 'react'
import { View,Text,StyleSheet,Button,Alert } from 'react-native'
import prompt from 'react-native-prompt-android';
import HeaderTitle from '../components/HeaderTitle';


export const AlertScreen = () => {

  const showAlert=()=>{
    Alert.alert(
      "Titulo",
      "Este es el mensaje de la alerta",
      [{
        text:"Cancel",
        onPress:()=>console.log("Cancel Pressed"),
        style:"cancel"
      },
      {
        text:"ok",onPress:()=>console.log("Ok pressed")
        
      }
      ],
      {
        cancelable:true,
        onDismiss:()=>console.log("onDismiss pressed")
      }
    )
  }

  const showPront=()=>{
    /* Alert.prompt(
      '¿Estas seguro?',
      'esta acción nos e revertir',
      (valor:string)=>console.log()
      
    ) */
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
       {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
      ],
      {
          type: 'secure-text',
          cancelable: false,
          defaultValue: 'test',
          placeholder: 'placeholder'
      }
  );
  }
   

  
  return (
<View style={styles.container}>
     <HeaderTitle title='Alerts'/>
     <Button
      title="Mostrar alerta"
      onPress={showAlert}
     />
     <View style={{height:10}}/>
     <Button
      title="Mostrar Pront"
      onPress={showPront}
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
export default AlertScreen;
