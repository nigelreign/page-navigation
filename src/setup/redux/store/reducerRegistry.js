import { combineReducers } from "redux-immutable";

import cardsReducer from "accessors/cards-accessor/reducer";
/**
 * Create root reducer, containing
 * all features of the application
 */
const rootReducer = combineReducers({
  cards: cardsReducer,
});

export default rootReducer;
