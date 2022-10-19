import cardsSaga from "accessors/cards/saga";

const sagas = [
  cardsSaga,
];
export default function registerSagaWithMiddleware(middleware) {
  sagas.forEach((saga) => middleware.run(saga));
}
