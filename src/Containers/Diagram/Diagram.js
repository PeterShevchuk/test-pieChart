import React from "react";
import PropTypes from "prop-types";

import Icons from "../../Components/Icons/Icons";

import "./Diagram.css";
const itemsHover = (e, info, index, item) => {
  const hoverItems = [document.querySelectorAll(".diagram__item"), document.querySelectorAll(".diagram__pie-chart")];
  const changeItems = [document.querySelector(".diagram__text-count"), document.querySelector(".diagram__text-name"), document.querySelector(".diagram__text")];
  const mouseenter = () => {
    changeItems[0].innerHTML = info.count;
    changeItems[1].innerHTML = info.name;
    changeItems[2].style.opacity = 1;
    hoverItems[0][index].classList.add("hovered");
    hoverItems[1][index].classList.add("hovered");
  };
  const mouseout = (el) => {
    changeItems[2].style.opacity = 0;
    hoverItems[0][index].classList.remove("hovered");
    hoverItems[1][index].classList.remove("hovered");
  };
  e.target.addEventListener("mouseenter", mouseenter);
  e.target.addEventListener("mouseout", mouseout);
};

const Diagram = ({ data }) => {
  const allWidthCount = data.listFiltered.map((item) => Math.round((100 / data.allCount) * item.count));
  const sizeDiag = 50;
  const radius = 100 / (2 * Math.PI);
  const strokeWidth = 5;
  const widhDiagram = 100;
  let allProcent = 0;

  const setDashoffset = (id) => {
    if (id === 0) return 0;
    const position = allWidthCount.slice(0, id).reduce((acc, item) => acc + item);
    return "-" + position;
  };
  const Dasharray = (id) => {
    allProcent += allWidthCount[id];
    const procent = allWidthCount[id] + (data.listFiltered.length - 1 === id && allProcent !== 100 ? 100 - allProcent : 0);
    return procent + " " + (widhDiagram - procent);
  };

  return (
    <>
      <div className="diagram">
        <div className="diagram__pie">
          <svg viewBox={`0 0 ${sizeDiag} ${sizeDiag}`}>
            {data.listFiltered.map((item, index) => (
              <circle key={index} onMouseEnter={(e) => itemsHover(e, item, index)} className="diagram__pie-chart" cx={sizeDiag / 2} cy={sizeDiag / 2} r={radius} stroke={data.colorArr[index]} strokeWidth={strokeWidth} strokeDasharray={Dasharray(index)} strokeDashoffset={setDashoffset(index)}></circle>
            ))}
            <g className="diagram__text">
              <text x="50%" y="50%" className="diagram__text-count"></text>
              <text x="50%" y="50%" className="diagram__text-name"></text>
            </g>
          </svg>
        </div>
        <ul className="diagram__list">
          {data.listFiltered.map((item, index) => (
            <li key={index} data-index={index} className="diagram__item">
              <p className="diagram__item-icon-diagram">
                <Icons.pie fill={data.colorArr[index]} Size={30} />
              </p>
              <p className="diagram__item-name" onClick={() => data.itemDisabled(item.id)} onMouseEnter={(e) => itemsHover(e, item, index)}>
                {item.name} ({item.count})
              </p>
              <p className="diagram__item-icon-close" onClick={() => data.itemDelete(item.id)} title="Видалити елемент діаграми">
                <Icons.close fill={data.colorArr[index]} Size={30} />
              </p>
            </li>
          ))}
        </ul>
      </div>
      <h2 className="warning">ВАЖЛИВО! При настисканні на назву позиції у списку, вона буде вилючена з діаграми, активувати її знову можна на головній сторінці поставивши прапорець у відповідній позиції!</h2>
    </>
  );
};

export default Diagram;

Diagram.propTypes = {
  data: PropTypes.object.isRequired,
};
