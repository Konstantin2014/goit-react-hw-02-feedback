import PropTypes from 'prop-types';
import { StstList, StstItem } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, feedback }) => {
  return (
    <StstList>
      <StstItem>Good: {good}</StstItem>
      <StstItem>Neutral: {neutral}</StstItem>
      <StstItem>Bad: {bad}</StstItem>
      <StstItem>Total: {total}</StstItem>
      <StstItem>Positive feedback: {feedback}%</StstItem>
    </StstList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  feedback: PropTypes.number.isRequired,
};
