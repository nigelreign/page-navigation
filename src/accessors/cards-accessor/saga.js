import { put, takeEvery, takeLatest } from "redux-saga/effects";
// eslint-disable-next-line import/no-unresolved
import getCardsRoutine, { updateCardRoutine } from "./routines";
import { toast } from "react-toastify";

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
  const { cards, id, pageName } = action.payload;

  for (let i = 0; i < cards?.length; i++) {
    if (cards[i]?.pageName === pageName) {
      const cardData = cards[i]?.cards;
      for (let c = 0; c < cardData?.length; c++) {
        if (cardData[c].id === id) {
          const isPinned = cards[i].cards[c].isPinned ? false : true;
          cards[i].cards[c].isPinned = isPinned;
          
          const message = `Card ${
            isPinned ? "Pinned" : "Unpinned"
          } successfully`;
          toast.success(message);
        }
      }
    }
  }

  try {
    // trigger request action
    yield put(updateCardRoutine.request());

    yield put(updateCardRoutine.success(cards));
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
