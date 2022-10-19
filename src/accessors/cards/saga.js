import { call, put, takeEvery } from "redux-saga/effects";
// eslint-disable-next-line import/no-unresolved
import getCardsRoutine from "./routines";

/**
 * ============================================================
 * @param {Get Cards}
 */
function* getCards() {
  try {
    const cards = [
      {
        pageName: "dashboard",
        cards: [],
      },
      {
        pageName: "page-one",
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
      {
        pageName: "page-one",
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

export default cardsSaga;
