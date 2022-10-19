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
      pageName: "Page 1",
      pageNumber: "1",
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
      pageName: "Page 2",
      pageNumber: "2",
      cards: [
        { id: "1", name: "Item 1", color: "pink", isPinned: false },
        { id: "2", name: "Item 2", color: "yellow", isPinned: false },
        { id: "3", name: "Item 3", color: "gray", isPinned: false },
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
  let isPinned = false;
  let pinnedCard;
  for (let i = 0; i < cards?.length; i++) {
    if (cards[i]?.pageName === pageName) {
      const cardData = cards[i]?.cards;
      for (let c = 0; c < cardData?.length; c++) {
        if (cardData[c].id === id) {
          isPinned = cards[i].cards[c].isPinned ? false : true;
          cards[i].cards[c].isPinned = isPinned;
          cards[i].cards[c].pageName = pageName;
          cards[i].cards[c].pageNumber = cards[i]?.pageNumber;

          pinnedCard = cards[i].cards[c];

          const message = `Card ${
            isPinned ? "Pinned" : "Unpinned"
          } successfully`;
          toast.success(message);
        }
      }
    }
  }

  for (let i = 0; i < cards?.length; i++) {
    if (cards[i]?.pageName === "dashboard") {
      if (isPinned) {
        cards[i].cards.push(pinnedCard);
      } else {
        const cardData = cards[i]?.cards;
        for (let c = 0; c < cardData?.length; c++) {
          if (cardData[c].id === id) {
            cardData.splice(i, 1);
          }
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
