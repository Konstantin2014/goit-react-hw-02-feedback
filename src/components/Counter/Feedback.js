import React from 'react';
// import { } from './Feedback.styled'


class Counter extends React.Component (
    state = {
        good: 0,
        neutral: 0,
        bad: 0
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
    



    render( ) {
        return{
            <div className='Feedbacks'>
                    <h1 className='Title'>Please leave feedback</h1>

                <div className="CounterControls"> 
                    <button type="button" onClick={this.voteForGood}>Good</button>
                    <button type="button" onClick={this.voteForNeutral}>Neutral</button>
                    <button type="button" onClick={this.voteForBad}>Bad</button>
                </div>

                <h2 className='Title'>Statistics</h2>
                    <ul className='StatisticsList'>
                        <li className='StatisticsItem'>Good: {this.state.good}</li>
                        <li className='StatisticsItem'>Neutral: {this.state.neutral}</li>
                        <li className='StatisticsItem'>Bad: {this.state.bad}</li>        
                    </ul>

            </div>
        }
    
    }

);

export default Counter;