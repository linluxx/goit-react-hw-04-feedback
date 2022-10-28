import PropTypes from 'prop-types';
import { StatText, StatList, StatItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatList>
      <StatItem>
        <StatText type={'good'}>Good: {good}</StatText>
      </StatItem>
      <StatItem>
        <StatText type={'neutral'}>Neutral: {neutral}</StatText>
      </StatItem>
      <StatItem>
        <StatText type={'bad'}>Bad: {bad}</StatText>
      </StatItem>
      <StatItem>
        <StatText type={'total'}>Total: {total}</StatText>
      </StatItem>
      <StatItem>
        <StatText type={'positivePercentage'}>
          Positive feedback: {positivePercentage}%
        </StatText>
      </StatItem>
    </StatList>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
