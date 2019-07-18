import { FETCH_STATUS } from '../constants';
import { filter } from 'lodash/fp';

export const ADD_PICTURES = 'ADD_PICTURES';
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const SET_FETCH_STATUS = 'SET_FETCH_STATUS';
export const INCREMENT_FETCH_COUNT = 'INCREMENT_FETCH_COUNT';

const { NOT_FETCHED } = FETCH_STATUS;

const initialState = {
  pictures: [],
  favorites: [],
  fetchStatus: NOT_FETCHED,
  fetchCount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCH_STATUS:
      return {
        ...state,
        fetchStatus: action.status,
      };
    case ADD_PICTURES:
      return {
        ...state,
        pictures: [...action.pictures, ...state.pictures],
      };
    case ADD_TO_FAVORITE:
      return {
        ...state,
        pictures: filter(({ id }) => action.id !== id)(state.pictures),
        favorites: [
          ...state.favorites,
          ...filter(({ id }) => action.id === id)(state.pictures),
        ],
      };
    case INCREMENT_FETCH_COUNT:
      return {
        ...state,
        fetchCount: state.fetchCount + 1,
      };
    default:
      return state;
  }
};

export default reducer;
