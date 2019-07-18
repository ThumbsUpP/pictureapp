import { toggleIsFetchingData } from '../redux/actions';
import { isFetchingSelector } from '../redux/selector';
import { connect } from 'react-redux';
import Header from './Header';

export default connect(
  isFetchingSelector,
  { toggleIsFetchingData },
)(Header);
