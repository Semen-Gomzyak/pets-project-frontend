import { BlackLetter, OrangeLetter } from './Logo.styled';
import PropTypes from 'prop-types';

export const BlackText = ({ children }) => {
  return <BlackLetter>{children}</BlackLetter>;
};

export const OrangeText = ({ children }) => {
  return <OrangeLetter>{children}</OrangeLetter>;
};

BlackText.propTypes = {
  children: PropTypes.string,
};
