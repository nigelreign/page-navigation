import { createRoutine } from "redux-saga-routines";

const getCardsRoutine = createRoutine("GET_CARDS");
export default getCardsRoutine;

export const updateCardRoutine = createRoutine("UPDATE_CARD");
