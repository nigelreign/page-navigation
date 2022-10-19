import { put, takeEvery, takeLatest } from "redux-saga/effects";
// eslint-disable-next-line import/no-unresolved
import getCardsRoutine, {updateCardRoutine} from "./routines";

/**
 * ============================================================
 * @param {Get Cards}
 */
function* getCards() {
  const cards = [
    {
      pageName: "dashboard",
      cards: [],
    },
    {
      pageName: "page-one",
      cards: [
        {
          id: "1",
          name: "Item 1",
          color: "red",
          isPinned: false,
        },
        {
          id: "2",
          name: "Item 2",
          color: "blue",
          isPinned: false,
        },
        {
          id: "3",
          name: "Item 3",
          color: "green",
          isPinned: false,
        },
        {
          id: "4",
          name: "Item 4",
          color: "purple",
          isPinned: false,
        },
      ],
    },
    {
      pageName: "page-two",
      cards: [
        {
          name: "Item 1",
          color: "red",
          isPinned: false,
        },
        {
          name: "Item 2",
          color: "blue",
          isPinned: false,
        },
        {
          name: "Item 3",
          color: "green",
          isPinned: false,
        },
        {
          name: "Item 4",
          color: "purple",
          isPinned: false,
        },
      ],
    },
  ];
  try {
    yield put(getCardsRoutine.success(cards));
  } catch (error) {
    // if request failed
    yield put(getCardsRoutine.failure("Failed to get cards"));
  } finally {
    // trigger fulfill action
    yield put(getCardsRoutine.fulfill());
  }
}

function* cardsSaga() {
  // run fetchDataFromServer on every trigger action
  yield takeEvery(getCardsRoutine.TRIGGER, getCards);
}

function* updateCard(action) {
  console.log('=====**')
  const { productID, cart, quantity, price } = action.payload;

  if (cart) {
    var search = cart.filter((obj) => obj.product_id === productID);
    if (search.length > 0) {
      search[0].quantity = search[0].quantity - quantity;
      search[0].price = search[0].price - price;
    }

    for (var i = 0; i < cart.length; i++) {
      if (cart[i].quantity === 0) {
        cart.splice(i, 1);
      }
    }
  }


  try {
    // trigger request action
    yield put(updateCardRoutine.request());

    yield put(updateCardRoutine.success(cart));
  } catch (error) {
    // if request failed
    yield put(updateCardRoutine.failure(error.message));
  } finally {
    // trigger fulfill action
    yield put(updateCardRoutine.fulfill());
  }
}

export function* updateCardSaga() {
  yield takeLatest([updateCardRoutine.TRIGGER], updateCard);
}


export default cardsSaga;
