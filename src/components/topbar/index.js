import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PATHS, ROOT_PATH } from "setup/routes/paths";

const Topbar = () => {
  // GET THE CURRENT PAGE NAME
  const location = useLocation();
  const selectedPath = location.pathname;

  return (
    <>
      <div className="topnav">
        <Link
          // SETS THE PAGE ACTIVE IF THE CURRENT PAGE IS EQUAL TO ROOT PATH
          className={selectedPath === ROOT_PATH ? "active" : ""}
          to={ROOT_PATH}
        >
          Dashboard
        </Link>
        <Link
          // SETS THE PAGE ACTIVE IF THE CURRENT PAGE IS EQUAL TTO THE PAGE PATH
          className={selectedPath === PATHS.pageOne ? "active" : ""}
          to={PATHS.pageOne}
        >
          Page 1
        </Link>
        <Link
          // SETS THE PAGE ACTIVE IF THE CURRENT PAGE IS EQUAL TO THE PAGE PATH
          className={selectedPath === PATHS.pageTwo ? "active" : ""}
          to={PATHS.pageTwo}
        >
          Page 2
        </Link>
      </div>
    </>
  );
};

export default Topbar;
