import React from "react";
import PropTypes from "prop-types";

import "./List.css";
import Icons from "../Icons/Icons";
const List = ({ data }) => {
  const inputHeandle = ({ target }, id) => {
    data.save(data.list.map((item) => (item.id === id ? { ...item, [target.name]: target.name === "count" ? Number(target.value) : target.value } : item)));
  };
  return (
    <ul className="list">
      {data.list.map((item) => (
        <li key={item.id} className="list__item">
          <input className="list__item-input" value={item.name} type="text" name="name" onChange={(e) => inputHeandle(e, item.id)} placeholder="Назва"></input>
          <input className="list__item-input" value={item.count} type="text" name="count" onChange={(e) => inputHeandle(e, item.id)} placeholder="Кількість"></input>
          <input type="checkbox" checked={!item.disabled} onChange={() => data.itemDisabled(item.id)} />
          <button className="list__item-del" onClick={() => data.itemDelete(item.id)}>
            <Icons.close />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;

List.propTypes = {
  data: PropTypes.object.isRequired,
};
