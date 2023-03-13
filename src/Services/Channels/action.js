import {
  SELECT_CHANNEL,
  FETCH_CHANNELS_START,
  FETCH_CHANNELS_SUCCESS,
  FETCH_CHANNELS_ERROR,
} from './constants';
import getData from './data';

export const selectChannel = id => {
  return {
    type: SELECT_CHANNEL,
    payload: {
      id,
    },
  };
};

export const fetchChannelsStart = () => ({
  type: FETCH_CHANNELS_START,
});

export const fetchChannelsSuccess = channels => ({
  type: FETCH_CHANNELS_SUCCESS,
  payload: {
    channels,
  },
});

export const fetchChannelsFailure = error => ({
  type: FETCH_CHANNELS_ERROR,
  payload: {
    error,
  },
});

export const fetchChannels = () => {
  return dispatch => {
    dispatch(fetchChannelsStart());
    getData()
      .then(channels => {
        dispatch(fetchChannelsSuccess(channels));
      })
      .catch(error => {
        dispatch(fetchChannelsFailure(error));
      });
  };
};
