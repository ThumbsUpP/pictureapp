import {
  ADD_PICTURES,
  INCREMENT_FETCH_COUNT,
  SET_FETCH_STATUS,
} from './reducer';
import { API_HOST, FETCH_STATUS } from '../constants';
import axios from 'axios';

const { FETCHING, FETCH_ERROR, FETCHED } = FETCH_STATUS;

const setFetchStatus = status => ({ type: SET_FETCH_STATUS, status });

const addPictures = pictures => ({
  type: ADD_PICTURES,
  pictures,
});

const incrementFetchCount = () => ({
  type: INCREMENT_FETCH_COUNT,
});

export const fetchPicture = () => {
  return (dispatch, getState) => {
    dispatch(setFetchStatus(FETCHING));
    const state = getState();
    const { fetchCount } = state.fetchStatus;
    axios
      .get(`${API_HOST}${fetchCount}&api_key=DEMO_KEY`)
      .then(({ data }) => {
        dispatch(addPictures(data.photos));
        dispatch(incrementFetchCount());
        dispatch(setFetchStatus(FETCHED));
      })
      .catch(() => dispatch(setFetchStatus(FETCH_ERROR)));
  };
};
