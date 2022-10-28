import PropTypes from 'prop-types';
import { Button, ButtonsList, ButtonsItem } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map(i => {
        return (
          <ButtonsItem key={i}>
            <Button
              type="button"
              onClick={() => {
                onLeaveFeedback(i);
              }}
            >
              {i}
            </Button>
          </ButtonsItem>
        );
      })}
    </ButtonsList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
