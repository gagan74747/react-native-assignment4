import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function VideoDescription({flex}) {
  const currentChannelDescription = useSelector(
    state => state.channelReducer.currentChannel,
  );

  return (
    <View style={[{flex}, styles.container]}>
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <View style={{width: '90%'}}>
            <Text style={{fontSize: 30}}>
              {currentChannelDescription?.meta?.title}
            </Text>
            <Text style={{fontSize: 15, marginTop: 5}}>
              {currentChannelDescription?.meta?.description}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
