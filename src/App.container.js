import App from './App';
import { lifecycle } from 'recompose';
import { fetchPicture } from './redux/actions';
import { compose } from 'lodash/fp';
import { connect } from 'react-redux';
import { picturesSelector } from './redux/selector';

export default compose(
  connect(
    picturesSelector,
    { fetchPicture },
  ),
  lifecycle({
    componentDidMount() {
      const { fetchPicture } = this.props;
      fetchPicture();
    },
  }),
)(App);
