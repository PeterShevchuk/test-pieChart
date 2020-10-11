import React from "react";
import PropTypes from "prop-types";

import Icons from "../../Components/Icons/Icons";

import "./Diagram.css";

const Diagram = ({ list, save }) => {
  const sizeDiag = 50;
  const radius = 100 / (2 * Math.PI);
  const strokeWidth = 5;
  const widhDiagram = 100;
  const listFiltered = list.filter((item) => item.name !== "" && item.count !== "");
  const lengthItems = listFiltered.length;
  const allCount = listFiltered.reduce((acc, item) => acc + item.count, 0);
  const allWidthCount = listFiltered.map((item) => Math.round((100 / allCount) * item.count));
  let allProcent = 0;
  const color = [];
  for (let i = 0; i < lengthItems; i++) {
    color.push(`rgb(${Math.floor(Math.random() * Math.floor(255))}, ${Math.floor(Math.random() * Math.floor(255))}, ${Math.floor(Math.random() * Math.floor(255))})`);
  }

  const itemsHover = (e, info, index, item) => {
    let hoverItems = [document.querySelectorAll(".diagram__item"), document.querySelectorAll(".diagram__pie-chart")];
    e.target.addEventListener("mouseenter", () => mouseenter(hoverItems[item][index]));
    e.target.addEventListener("mouseout", () => mouseout(hoverItems[item][index]));
    const mouseenter = (el) => {
      document.querySelector(".diagram__text-count").innerHTML = info.count;
      document.querySelector(".diagram__text-name").innerHTML = info.name;
      document.querySelector(".diagram__text").style.opacity = 1;
      el.classList.add("hovered");
    };
    const mouseout = (el) => {
      document.querySelector(".diagram__text").style.opacity = 0;
      el.classList.remove("hovered");
    };
  };
  const setDashoffset = (id) => {
    if (id === 0) return 0;
    const position = allWidthCount.slice(0, id).reduce((acc, item) => acc + item);
    return "-" + position;
  };
  const Dasharray = (id) => {
    allProcent += allWidthCount[id];
    const procent = allWidthCount[id] + (lengthItems - 1 === id && allProcent !== 100 ? 100 - allProcent : 0);
    return procent + " " + (widhDiagram - procent);
  };
  const itemDelete = (id) => {
    save(list.filter((item) => item.id !== id));
  };
  return (
    <div className="diagram">
      <div className="diagram__pie">
        <svg viewBox={`0 0 ${sizeDiag} ${sizeDiag}`}>
          {listFiltered.map((item) => {
            const index = listFiltered.indexOf(item);
            return <circle key={index} onMouseEnter={(e) => itemsHover(e, item, index, 0)} className="diagram__pie-chart" cx={sizeDiag / 2} cy={sizeDiag / 2} r={radius} stroke={color[index]} strokeWidth={strokeWidth} strokeDasharray={Dasharray(index)} strokeDashoffset={setDashoffset(index)}></circle>;
          })}
          <g className="diagram__text">
            <text x="50%" y="50%" className="diagram__text-count"></text>
            <text x="50%" y="50%" className="diagram__text-name"></text>
          </g>
        </svg>
      </div>
      <ul className="diagram__list">
        {listFiltered.map((item) => {
          const index = listFiltered.indexOf(item);
          return (
            <li onMouseEnter={(e) => itemsHover(e, item, index, 1)} key={index} data-index={index} className="diagram__item">
              <p className="diagram__item-icon-diagram">
                <Icons.pie fill={color[index]} Size={30} />
              </p>
              <p className="diagram__item-name">{item.name}</p>
              <p className="diagram__item-count">({item.count})</p>
              <p className="diagram__item-icon-close" onClick={() => itemDelete(item.id)} title="Видалити елемент діаграми">
                <Icons.close fill={color[index]} Size={30} />
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Diagram;

Diagram.propTypes = {
  list: PropTypes.array.isRequired,
  save: PropTypes.func.isRequired,
};
