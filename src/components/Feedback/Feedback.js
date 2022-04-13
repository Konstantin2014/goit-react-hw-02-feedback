import { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { SectionTitle } from '../Section/Section';
import { Notification } from '../Notificaion/Notification.js';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  voteForIncriment = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback()) {
      return ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
    } else {
      return 0;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      state,
      voteForIncriment,
      countPositiveFeedbackPercentage,
      countTotalFeedback,
    } = this;
    const total = countTotalFeedback();
    const feedback = countPositiveFeedbackPercentage();
    return (
      <div>
        <SectionTitle title={'Please leave feedback'}>
          ,
          <FeedbackOptions
            options={Object.keys(state)}
            voteForIncriment={voteForIncriment}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        </SectionTitle>
        {total > 0 && (
          <SectionTitle title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              feedback={feedback}
            />
          </SectionTitle>
        )}
        {!total && <Notification message="There is no feedback" />}
      </div>
    );
  }
}

export default Feedback;
