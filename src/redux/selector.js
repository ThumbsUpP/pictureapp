import { pick, property } from 'lodash/fp';

export const picturesSelector = pick('pictures');
export const favoriteSelector = pick('favorites');
export const isFetchingSelector = pick('isFetchingData');
