import React from 'react';
import PropTypes from 'prop-types';

import From from '../../Components/From/From';
import List from '../../Components/List/List';

const Home = ({ list, setList}) => {
    return (
        <div>
            <h1>Home</h1>
            <From setList={setList}/>
            <List list={list}/>
        </div>
    );
};

export default Home;

Home.propTypes = {

    list: PropTypes.array.isRequired,
    setList: PropTypes.func.isRequired,

}