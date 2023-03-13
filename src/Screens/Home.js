import {View} from 'react-native';
import React from 'react';
import Channels from '../components/Channels';
import VideoDescription from '../components/VideoDescription';
import VideoContainer from '../components/VideoContainer';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {fetchChannels} from '../Services/Channels/action';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.channelReducer.isLoading);

  useEffect(() => {
    dispatch(fetchChannels());
  }, []);

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <Spinner visible={true} />
      ) : (
        <>
          <VideoContainer flex={3} />
          <VideoDescription flex={2} />
          <Channels flex={5} />
        </>
      )}
    </View>
  );
};

export default Home;
