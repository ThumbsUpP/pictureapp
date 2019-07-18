import { addToFavorite, fetchPicture } from '../redux/actions';
import { isFetchingSelector, picturesSelector } from '../redux/selector';
import Main from './Main';
import combine from '../helpers/combine';
import { compose } from 'lodash/fp';
import { connect } from 'react-redux';
import { lifecycle } from 'recompose';

export default compose(
  connect(
    combine(picturesSelector, isFetchingSelector),
    { fetchPicture, addToFavorite },
  ),
  lifecycle({
    componentDidMount() {
      const { fetchPicture } = this.props;
      fetchPicture();
      setInterval(() => {
        fetchPicture();
      }, 10000);
    },
  }),
)(Main);
