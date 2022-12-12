import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView,RefreshControl} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

export const PullToRefrestshScreen = () => {

  const [refreshing, setRefreshing] = useState(false)
  const onRefresh=()=>{
    setRefreshing(true);
    setTimeout(()=>{
      console.log("Terminamos");
      setRefreshing(false)
    },1500);
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={styles.container}>
        <HeaderTitle title="Pull to refresh" />
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
