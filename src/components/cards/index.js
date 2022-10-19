import React from "react";

const Cards = (props) => {
  const { name, isPinned, color, id, updateCard, page, selectedPage } = props;
  return (
    <>
      <div
        className="col-md-2"
        onClick={() => {
          updateCard(id);
        }}
      >
        <div className="card" style={{ backgroundColor: color }}>
          <div class="container">
            <h4>
              <b>{name}</b>
            </h4>
            <p>
              {isPinned && selectedPage === "dashboard"
                ? page
                : isPinned
                ? "(Pinned)"
                : ""}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
