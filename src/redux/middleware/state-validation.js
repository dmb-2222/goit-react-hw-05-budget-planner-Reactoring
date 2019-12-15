import tv4 from 'tv4';
import stateSchema from '../scheme/state-validation.json';

const stateValidator = store => next => action => {
  next(action);

  const isValid = tv4.validate(store.getState(), stateSchema);

  if (!isValid) {
    console.log(tv4.error);
    console.warn('Invalid state schema detected!')
  }
};
export default stateValidator