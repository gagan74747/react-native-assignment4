import {View, Text} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import {useSelector} from 'react-redux';

export default function VideoContainer({flex}) {
  const currentChannelVideoStream = useSelector(
    state => state.channelReducer.currentChannel,
  );

  return (
    <View style={{flex}}>
      <Video
        style={{flex: 1}}
        controls
        resizeMode="cover"
        source={{
          uri: currentChannelVideoStream?.detail?.playUrl,
          type: 'm3u8',
        }}
        // onLoad={() => setIsLoading(false)}
        // onLoadStart={() => setIsLoading(true)}
        // style={{flex: 1}}
      />
    </View>
  );
}
