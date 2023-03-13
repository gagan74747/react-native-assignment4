import {
  SELECT_CHANNEL,
  FETCH_CHANNELS_ERROR,
  FETCH_CHANNELS_START,
  FETCH_CHANNELS_SUCCESS,
} from './constants';

const initialState = {
  channels: [],
  currentChannel: {},
  isLoading: false,
  error: null,
};

export const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CHANNEL:
      return {
        ...state,
        currentChannel: state.channels.find(
          item => item.meta.id === action.payload.id,
        ),
      };
    case FETCH_CHANNELS_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_CHANNELS_SUCCESS:
      return {
        ...state,
        channels: action.payload.channels,
        currentChannel: action.payload.channels[0],
        isLoading: false,
        error: null,
      };
    case FETCH_CHANNELS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
