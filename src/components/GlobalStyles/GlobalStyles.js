import PropTypes from 'prop-types';
import React from 'react';
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
    return React.Children.only(children);
}

GlobalStyles.prototypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
