import { FETCH_STATUS } from '../constants'
export const ADD_PICTURE = "ADD_PICTURE";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const FETCH_PICTURES = 'FETCH_PICTURES';
export const SET_FETCH_STATUS = 'SET_FETCH_STATUS';

const { NOT_FETCHED, FETCHED, ERROR, FETCHING} = FETCH_STATUS;

const initialState = {
  pictures: [],
  fetchStatus: NOT_FETCHED,
};

const reducer = (action, state = initialState) => {
  switch (action.type) {
    case SET_FETCH_STATUS:
    case ADD_PICTURE:
    case ADD_TO_FAVORITE:
    default :
      return state
  }
};

export default reducer

