import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

export function App() {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const feedbackOptions = { good, bad, neutral };

  const onLeaveFeedback = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGoodFeedback(prev => prev + 1);
        break;
      case 'neutral':
        setNeutralFeedback(prev => prev + 1);
        break;
      case 'bad':
        setBadFeedback(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return Math.round((good * 100) / totalFeedback) + '%';
  };
  const isEmptyList = !(good + neutral + bad);
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackOptions)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {isEmptyList ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
// }
