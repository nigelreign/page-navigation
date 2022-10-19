import { connect } from "react-redux";
import React from "react";
import { updateCardRoutine } from "accessors/cards-accessor/routines";
import Topbar from "components/topbar";
import Cards from "components/cards";
import filterArrayByField from "utils/filterArrayByField";

const Main = (props) => {
  const { cards, updateCard, pageName } = props;

  const dashboardCards = filterArrayByField(cards, "pageName", pageName);

  const setUpdateCard = (id) => {
    updateCard(cards, id, pageName);
  };
  return (
    <>
      <Topbar />
      <div className="row">
        {dashboardCards?.map((card) => {
          return (
            <Cards
              id={card.id}
              name={card.name}
              isPinned={card.isPinned}
              color={card.color}
              updateCard={setUpdateCard}
            />
          );
        })}
      </div>
    </>
  );
};

Main.propTypes = {
  cards: [],
};

function mapStateToProps(state) {
  return {
    cards: state.getIn(["cards", "cards"]),
    loading: state.getIn(["cards", "loading"]),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateCard: (cards, id, pageName) =>
      dispatch(
        updateCardRoutine.trigger({
          id,
          cards,
          pageName,
        })
      ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
