import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link to={"/"}>
          <button>홈으로 가기</button>
        </Link>
        <br />
        <Link to={"/state1"}>
          <button>state1</button>
        </Link>
        <br />
        <Link to={"/state2"}>
          <button>state2</button>
        </Link>
        <br />
        <Link to={"/ref1"}>
          <button>ref1</button>
        </Link>
        <br />
        <Link to={"/ref2"}>
          <button>ref2</button>
        </Link>
        <br />
        <Link to={"/memo1"}>
          <button>memo1</button>
        </Link>
        <br />
        <Link to={"/effect1"}>
          <button>effect1</button>
        </Link>
        <br />
      </div>
      <hr />
      <div>{children}</div>
    </div>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node,
};

export default HomeLayout;
