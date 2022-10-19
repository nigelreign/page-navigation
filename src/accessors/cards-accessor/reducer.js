import { fromJS } from "immutable";

import getCardsRoutine, {updateCardRoutine} from "./routines";

const initialState = fromJS({});

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case getCardsRoutine.TRIGGER:
      return state.merge({
        loading: true,
      });
    case getCardsRoutine.SUCCESS:
      return state.merge({
        cards: action.payload,
        loading: false,
      });
    case getCardsRoutine.FAILURE:
      return state.merge({
        loading: false,
      });

    case updateCardRoutine.TRIGGER:
      return state.merge({
        loading: true,
      });
    case updateCardRoutine.SUCCESS:
      return state.merge({
        cards: action.payload,
        loading: false,
      });
    case updateCardRoutine.FAILURE:
      return state.merge({
        loading: false,
      });

    default:
      return state;
  }
}
