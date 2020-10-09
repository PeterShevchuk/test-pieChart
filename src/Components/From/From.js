import React from 'react';
import PropTypes from 'prop-types';



const From = () => {
    return (
        <div>
            <h2>Form</h2>
        </div>
    );
};

export default From;

From.propTypes = {

    setList: PropTypes.func.isRequired,

}