import React from "react";

const Cards = (props) => {
  const { name, page, isPinned, color, id, updateCard } = props;
  return (
    <>
      <div
        class="col-md-2"
        onClick={() => {
          updateCard(id);
        }}
      >
        <div class="card" style={{ backgroundColor: color }}>
          <div class="container">
            <h4>
              <b>{name}</b>
            </h4>
            <p>{isPinned ? "(Pinned)" : ""}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;