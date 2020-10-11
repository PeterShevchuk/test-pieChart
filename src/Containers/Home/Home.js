import React from "react";
import PropTypes from "prop-types";

import From from "../../Components/From/From";
import List from "../../Components/List/List";

import "./Home.css";
const Home = ({ data }) => {
  return (
    <div>
      <List data={data} />
      <From data={data} />

      <h2 className="warning">ВАЖЛИВО! Позиція в якої хочаб одне з полів пусте, не буде враховуватись у розрахунках діаграми!</h2>
    </div>
  );
};

export default Home;

Home.propTypes = {
  data: PropTypes.object.isRequired,
};
