import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PATHS, ROOT_PATH } from "setup/routes/paths";

const Topbar = (props) => {
  const location = useLocation();
  const selectedPath = location.pathname;

  return (
    <>
      <div className="topnav">
        <Link
          className={selectedPath === ROOT_PATH ? "active" : ""}
          to={ROOT_PATH}
        >
          Dashboard
        </Link>
        <Link
          className={selectedPath === PATHS.pageOne ? "active" : ""}
          to={PATHS.pageOne}
        >
          Page 1
        </Link>
        <Link
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
