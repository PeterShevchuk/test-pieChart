import React from "react";
import PropTypes from "prop-types";

import { initialState } from "../../App";

import "./From.css";
const From = ({ data }) => {
  const addItem = () => {
    data.save([...data.list, { ...initialState, id: Date.now() }]);
  };
  return (
    <div className="addItem">
      <button onClick={addItem} className="addItem__button">
        Додати позицію
      </button>
    </div>
  );
};

export default From;

From.propTypes = {
  data: PropTypes.object.isRequired,
};
