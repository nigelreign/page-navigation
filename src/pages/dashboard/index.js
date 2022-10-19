import { Spin } from "antd";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import getCardsRoutine, {
  updateCardRoutine,
} from "accessors/cards-accessor/routines";
import Topbar from "components/topbar";
import Cards from "components/cards";
import filterArrayByField from "utils/filterArrayByField";

const Dashboard = (props) => {
  const { cards, getCards, updateCard } = props;

  useEffect(() => {
    getCards();
  }, [getCards]);

  const dashboardCards = filterArrayByField(cards, "pageName", "page-one");

  const setUpdateCard = (id) =>{
    console.log("--cliekc")
    updateCard(cards, id)
  }
  return (
    <>
      <Topbar />
      <div className="row">
        {dashboardCards?.map((card) => {
          return (
            <Cards
              name={card.name}
              page={card.isPinned}
              color={card.color}
              updateCard={setUpdateCard}
            />
          );
        })}
      </div>
    </>
  );
};

Dashboard.propTypes = {
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
    getCards: () => dispatch(getCardsRoutine.trigger({})),
    updateCard: (cards, id) =>
      dispatch(
        updateCardRoutine.trigger({
          id,
          cards,
        })
      ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
