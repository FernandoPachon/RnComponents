import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView,RefreshControl} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

export const PullToRefrestshScreen = () => {

  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState<string>()

  const onRefresh=()=>{
    setRefreshing(true);
    setTimeout(()=>{
      console.log("Terminamos");
      setRefreshing(false)
      setData('Hola mundo')
    },1500);
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor="#5856d6"
          colors={['white', 'red','orange','green','yellow']}
          style={{backgroundColor:"orange"}}
        />
      }
    >
      <View style={styles.container}>
        <HeaderTitle title="Pull to refresh" />
        {
        data && <HeaderTitle title={data}/>
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
export default PullToRefrestshScreen;
