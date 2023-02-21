import React from 'react';
import PropTypes from 'prop-types';
import { CombinedButton } from './Button.styled';

export const Button = ({ children, onCLick, ...allProps }) => (
  <CombinedButton type="button" onClick={onCLick} {...allProps}>
    {children}
  </CombinedButton>
);

Button.defaultProps = {
  onCLick: () => null,
  children: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
