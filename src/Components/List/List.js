import React from 'react';
import PropTypes from 'prop-types';

const List = () => {
    return (
        <div>
            <h2>List</h2>
        </div>
    );
};

export default List;

List.propTypes = {

    list: PropTypes.array.isRequired,


}