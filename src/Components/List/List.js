import React from "react";
import PropTypes from "prop-types";

import "./List.css";
import Icons from "../Icons/Icons";
const List = ({ list, save }) => {
  const inputHeandle = ({ target }, id) => {
    save(list.map((item) => (item.id === id ? { ...item, [target.name]: target.name === "count" ? Number(target.value) : target.value } : item)));
  };
  const inputDelete = (id) => {
    save(list.filter((item) => item.id !== id));
  };

  return (
    <ul className="list">
      {list.map((item) => (
        <li key={item.id} className="list__item">
          <input className="list__item-input" value={item.name} type="text" name="name" onChange={(e) => inputHeandle(e, item.id)} placeholder="Name"></input>
          <input className="list__item-input" value={item.count} type="text" name="count" onChange={(e) => inputHeandle(e, item.id)} placeholder="Count"></input>
          <button className="list__item-del" onClick={() => inputDelete(item.id)}>
            <Icons.close />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;

List.propTypes = {
  list: PropTypes.array.isRequired,
  save: PropTypes.func.isRequired,
};
