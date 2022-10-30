import { useState, React, useEffect } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import Wrapper from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const feedback = ['good', 'neutral', 'bad'];

  const onFeedbackIncrement = name => {
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        console.log('Wrong feedback');
    }
  };

  useEffect(() => {
    const totalFeedback = good + neutral + bad;
    setTotal(totalFeedback);
    setPercentage(Math.ceil((good / totalFeedback) * 100));
  }, [bad, good, neutral]);

  return (
    <Wrapper>
      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={feedback}
          onLeaveFeedback={onFeedbackIncrement}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        )}
      </Section>
    </Wrapper>
  );
};

export default App;
