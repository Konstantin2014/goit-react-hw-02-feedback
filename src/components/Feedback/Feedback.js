import React from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { SectionTitle } from '../Section/Section';

class Feedback extends React.Component {
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
    return (
      <div>
        <SectionTitle title={'Please leave feedback'}>
          ,
          <FeedbackOptions
            options={Object.keys(this.state)}
            voteForIncriment={this.voteForIncriment}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        </SectionTitle>
        ,
        <SectionTitle title={'Statistics'}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            feedback={this.countPositiveFeedbackPercentage()}
          />
        </SectionTitle>
      </div>
    );
  }
}

export default Feedback;
