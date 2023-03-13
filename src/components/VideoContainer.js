import {View, StyleSheet} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import {useSelector} from 'react-redux';
import VideoLoader from './VideoLoader';

export default function VideoContainer({flex}) {
  const currentChannelVideoStream = useSelector(
    state => state.channelReducer.currentChannel,
  );

  const [isVideoLoading, setIsVideoLoading] = React.useState(false);

  return (
    <View style={{flex}}>
      <Video
        style={[isVideoLoading ? styles.hidecomponent : styles.video]}
        controls
        resizeMode="cover"
        source={{
          uri: currentChannelVideoStream?.detail?.playUrl,
        }}
        onLoadStart={() => setIsVideoLoading(true)}
        onLoad={() => setIsVideoLoading(false)}
      />
      <VideoLoader isVideoLoading={isVideoLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  hidecomponent: {
    display: 'none',
  },
  video: {
    flex: 1,
  },
});
