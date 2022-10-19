import cardsSaga, { updateCardSaga } from "accessors/cards-accessor/saga";

const sagas = [cardsSaga, updateCardSaga];
export default function registerSagaWithMiddleware(middleware) {
  sagas.forEach((saga) => middleware.run(saga));
}
