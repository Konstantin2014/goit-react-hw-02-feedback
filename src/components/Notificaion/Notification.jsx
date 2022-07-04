import PropTypes from 'prop-types';
import { Massege } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Massege>{message}</Massege>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
