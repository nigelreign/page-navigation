import { Spin } from "antd";
import { connect } from "react-redux";
import React from "react";
import { toast } from "react-toastify";
import getCardsRoutine from "accessors/cards-accessor/routines";
import Topbar from "components/topbar";

const PageTwo = (props) => {
  const { cards, getCards, loading } = props;

  return (
    <>
      <Topbar />
      <div class="card">
        <div class="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </>
  );
};

PageTwo.propTypes = {};

function mapStateToProps(state) {
  return {
    cards: state.getIn(["cards", "cards"]),
    loading: state.getIn(["cards", "loading"]),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCards: () => dispatch(getCardsRoutine.trigger({})),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageTwo);