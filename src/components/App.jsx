import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

export  function App() {
  const [state, setState] = useState({
    good:0,
    neutral:0,
    bad:0,
  });
   const onLeaveFeedback = e => {
    const { name } = e.target;
    setState(prev => ({...prev,[name]:prev[name]+1}))
  };


  const countTotalFeedback = () => {
    const {good,bad,neutral} = state;
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const {good} = state;
    const totalFeedback = countTotalFeedback();
    return Math.round((good * 100) / totalFeedback) + '%';
  };
   const isEmptyList = !(state.good + state.neutral + state.bad)
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {isEmptyList ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
// }
