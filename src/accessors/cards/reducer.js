import { fromJS } from "immutable";

import getCardsRoutine from "./routines";

const initialState = fromJS({});

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case getCardsRoutine.TRIGGER:
      return state.merge({
        loading: true,
      });
    case getCardsRoutine.SUCCESS:
      return state.merge({
        cards: action.payload.data.results,
        loading: false
      });
    case getCardsRoutine.FAILURE:
      return state.merge({
        loading: false
      });

    default:
      return state;
  }
}
