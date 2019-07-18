import { pick } from 'lodash/fp';

export const picturesSelector = pick('pictures');
export const favoriteSelector = pick('favorites');
