import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Modal} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';


export const ModalScreen = () => {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <HeaderTitle title="Modal Screen" />

      <Button 
        title="Abrir Modal" 
        onPress={() => setIsVisible(true)} 
      />

      <Modal 
        animationType="fade" 
        visible={isVisible} 
        transparent={true}
      >


        <View
          style={{
             flex: 1,
                backgroundColor: 'rgba(0,0,0,0.3)',
                justifyContent: 'center',
                alignItems: 'center'
          }}>
          {/* Contenido del modal*/}
          <View style={{
               width: 200,
               height: 200,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                shadowOffset: {
                width: 0,
                height: 10
                },
                shadowOpacity: 0.25,
                elevation: 10,
                borderRadius: 5
                }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Modal</Text>
                <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20 }}>Cuerpo del modal</Text>
                <Button
                    title="Cerrar"
                    onPress={ () => setIsVisible(false) }
                />
            </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
export default ModalScreen;
