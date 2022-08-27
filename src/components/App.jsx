import styles from "./App.module.scss";

import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

import { useState } from "react";

export default function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const stateKeys = Object.keys(state);
  const { good, neutral, bad } = state;

  const countElement = (propertyName) => {
    setState((prevState) => {
      return {
        ...prevState,
        [propertyName]: prevState[propertyName] + 1,
      };
    });
  };

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (!total) {
      return 0;
    }
    return Number((good / total) * 100).toFixed();
  };

  return (
    <section className={styles.section}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={stateKeys} onLeaveFeedback={countElement} />
        <Section title="Statistics"></Section>

        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </section>
  );
}
