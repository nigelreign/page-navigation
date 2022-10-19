import React from "react";
import Cards from "./cards-accessor";

const AccessorContainer = (props) => {
  return (
    <>
      {/**
       * ================================================================
       * Initializes card the card accessor which will get cards from the redux store
       * ================================================================ **/}

      <Cards />
    </>
  );
};

export default AccessorContainer;
