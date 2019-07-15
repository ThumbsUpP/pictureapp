import { FETCH_STATUS } from '../constants';
export const ADD_PICTURES = 'ADD_PICTURES';
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const FETCH_PICTURES = 'FETCH_PICTURES';
export const SET_FETCH_STATUS = 'SET_FETCH_STATUS';
export const INCREMENT_FETCH_COUNT = 'INCREMENT_FETCH_COUNT';

const { NOT_FETCHED, FETCHED, ERROR, FETCHING } = FETCH_STATUS;

const initialState = {
  pictures: [],
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
        pictures: [...state.pictures, ...action.pictures],
      };
    case INCREMENT_FETCH_COUNT:
      return {
        ...state,
        fetchCount: state.fetchCount + 1,
      };
    case ADD_TO_FAVORITE:
    default:
      return state;
  }
};

export default reducer;
