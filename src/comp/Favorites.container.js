import { connect } from 'react-redux';
import { favoriteSelector } from '../redux/selector';
import Favorites from './Favorites';

export default connect(favoriteSelector)(Favorites);
