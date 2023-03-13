import {View, StyleSheet} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

export default function VideoLoader({isVideoLoading}) {
  return (
    <View style={isVideoLoading ? styles.container : styles.hideComponent}>
      <Lottie source={require('../assets/Loader.json')} autoPlay loop />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hideComponent: {
    display: 'none',
  },
});
