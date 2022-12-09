import React from 'react'
import { View,Text,StyleSheet,Button,Alert } from 'react-native'
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

  return (
<View style={styles.container}>
     <HeaderTitle title='Alerts'/>
     <Button
      title="Mostrar alerta"
      onPress={showAlert}
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
