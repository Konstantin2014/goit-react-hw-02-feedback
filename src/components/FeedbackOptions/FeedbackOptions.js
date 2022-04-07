import PropTypes from 'prop-types';
import { ButtonBlock, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, voteForIncriment }) => {
  return (
    <ButtonBlock>
      {options.map(option => (
        <Button
          key={option}
          name={option}
          type="button"
          onClick={voteForIncriment}
        >
          {option}
        </Button>
      ))}
    </ButtonBlock>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  voteForIncriment: PropTypes.func.isRequired,
};
