import { reduce } from 'lodash/fp';

export default (...functionsToCombine) => (...args) => ({
  ...reduce((acc, func) => ({ ...acc, ...func(...args) }), {})(
    functionsToCombine,
  ),
});
