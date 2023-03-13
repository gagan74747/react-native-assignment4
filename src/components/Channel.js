import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectChannel} from '../Services/Channels/action';

export default function Channel({item}) {
  const currentChannel = useSelector(
    state => state.channelReducer.currentChannel,
  );
  const dispatch = useDispatch();

  const handleSelectedChannel = id => {
    dispatch(selectChannel(id));
  };
  return (
    <View
      style={
        item.meta.id === currentChannel.meta.id
          ? [styles.channelCard, styles.selected]
          : styles.channelCard
      }>
      <TouchableOpacity onPress={() => handleSelectedChannel(item.meta.id)}>
        <Text
          style={
            item.meta.id === currentChannel.meta.id
              ? [styles.cardText, styles.cardSelected]
              : styles.cardText
          }>
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
  selected: {
    backgroundColor: 'blue',
  },
  cardText: {fontSize: 20, textAlign: 'center'},
  cardSelected: {
    color: 'white',
  },
});
