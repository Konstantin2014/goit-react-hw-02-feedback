import PropTypes from 'prop-types';
import { StstList, StstItem } from './Statistics.styled';
import { Notification } from '../Notificaion/Notification';

export const Statistics = ({ good, neutral, bad, total, feedback }) => {
  if (total) {
    return (
      <StstList>
        <StstItem>Good: {good}</StstItem>
        <StstItem>Neutral: {neutral}</StstItem>
        <StstItem>Bad: {bad}</StstItem>
        <StstItem>Total: {total}</StstItem>
        <StstItem>Positive feedback: {feedback}%</StstItem>
      </StstList>
    );
  } else {
    return <Notification message="There is no feedback" />;
  }
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  feedback: PropTypes.number,
};
