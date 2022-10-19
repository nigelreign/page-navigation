import { createStore } from 'redux';
import rootReducer from 'setup/redux/store/reducerRegistry';

const store = createStore(rootReducer);

export default store;
