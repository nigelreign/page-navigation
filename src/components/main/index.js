import { connect } from "react-redux";
import React from "react";
import { updateCardRoutine } from "accessors/cards-accessor/routines";
import Topbar from "components/topbar";
import Cards from "components/cards";
import filterArrayByField from "utils/filterArrayByField";

const Main = (props) => {
  const { cards, updateCard, pageName } = props;

  /**
   * ========================================================
   * GET CARDS FROM REDUX STORE AND FILTER USING THE PAGE NAME
   * =========================================================
   */
  const pageCards = filterArrayByField(cards, "pageName", pageName);

  const setUpdateCard = (id) => {
    updateCard(cards, id, pageName);
  };

  if (pageName === "dashboard") {
    /**
     * ============================
     * SORT CARDS BY NAME
     * ============================
     */
    pageCards?.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });

    /**
     * ============================
     * SORT CARDS BY PAGE NAME
     * ============================
     */

    pageCards?.sort((a, b) => {
      return a.pageNumber - b.pageNumber;
    });
  }
  return (
    <>
      <Topbar />
      <div className="row">
        {/**
         * =========================================
         * Render the selected page cards
         */}
        {pageCards?.map((card) => {
          return (
            <Cards
              selectedPage={pageName}
              id={card.id}
              name={card.name}
              page={card.pageName}
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

/**
 * set proptypes
 */
Main.propTypes = {
  cards: [],
};

/**
 *
 * @param {*} state
 * @returns cards from redux store
 */
function mapStateToProps(state) {
  return {
    cards: state.getIn(["cards", "cards"]),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    /**
     *
     * @param {*} cards
     * @param {*} id
     * @param {*} pageName
     * @returns alert: card pinned successfully
     */
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
