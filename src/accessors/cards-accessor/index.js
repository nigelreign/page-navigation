/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import getCardsRoutine from "./routines";

import { connect } from "react-redux";

const Cards = (props) => {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const { getCards } = props;
    getCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

Cards.propTypes = {};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    getCards: () => dispatch(getCardsRoutine.trigger({})),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
