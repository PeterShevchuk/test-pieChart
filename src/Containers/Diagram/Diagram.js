import React from 'react';
import PropTypes from 'prop-types';



const Diagram = () => {
    return (
        <div>
            <h1>Diagram</h1>
        </div>
    );
};

export default Diagram;



Diagram.propTypes = {

    list: PropTypes.array.isRequired,

}