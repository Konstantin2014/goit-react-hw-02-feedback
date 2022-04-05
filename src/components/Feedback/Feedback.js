import React from 'react';
import {
  Title,
  Button,
  BlockButton,
  TitleStat,
  StstList,
  Message,
} from './Feedback.styled';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  voteForGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  voteForNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  voteForBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
  };

  show = () => {};

  hide = () => {};

  render() {
    return (
      <div>
        <section>
          <Title>Please leave feedback</Title>
          <BlockButton>
            <Button type="button" onClick={this.voteForGood}>
              Good
            </Button>
            <Button type="button" onClick={this.voteForNeutral}>
              Neutral
            </Button>
            <Button type="button" onClick={this.voteForBad}>
              Bad
            </Button>
          </BlockButton>
        </section>

        <section>
          <TitleStat>Statistics</TitleStat>
          <Message>There is no feedback</Message>
          <StstList>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            <li>Total: {this.countTotalFeedback()}</li>
            <li>
              Positive feedback: {this.countPositiveFeedbackPercentage()}%
            </li>
          </StstList>
        </section>
      </div>
    );
  }
}

export default Feedback;
