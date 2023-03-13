import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Channel from './Channel';
import {StyleSheet} from 'react-native';

export default function Channels({flex}) {
  const channels = useSelector(state => state.channelReducer.channels);

  return (
    <View style={[{flex}, styles.container]}>
      <Text style={styles.header}>Channels List</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={channels}
          renderItem={({item}) => {
            return <Channel item={item} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {fontSize: 30, marginLeft: 25},
  container: {
    marginVertical: 10,
  },
  listContainer: {
    margin: 15,
    marginBottom: 40,
  },
});
