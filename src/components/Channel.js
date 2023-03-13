import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {selectChannel} from '../Services/Channels/action';

export default function Channel({item}) {
  const dispatch = useDispatch();

  const handleSelectedChannel = id => {
    dispatch(selectChannel(id));
  };
  return (
    <View style={styles.channelCard}>
      <TouchableOpacity onPress={() => handleSelectedChannel(item.meta.id)}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>
          {item.meta.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  channelCard: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    padding: 20,
    margin: 5,
  },
});
