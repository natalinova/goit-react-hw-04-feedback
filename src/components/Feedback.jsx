import { Component } from "react";
import FeedbackBlock from "./FeedbackBlock";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";


export default class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad:0
    }
    addFeedback = (nameFeedback) => {
        this.setState((prevState) => {
            const value = prevState[nameFeedback];
            return { [nameFeedback]: value + 1}
    })
    }
    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }
    countPositiveFeedbackPercentage() {
        const total = this.countTotalFeedback();
        if (!total) {
            return 0
        }
        const value = this.state.good;
        const result = ( value/ total) * 100;
        return Number(result.toFixed(2))
    
    }
    render() {
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback();
        const positiveFeedback = this.countPositiveFeedbackPercentage();
        return (
            <FeedbackBlock title='Please, leave feedback!'>
                <Statistics addFeedback={this.addFeedback} />
                {!totalFeedback ? <p>There is no feedback</p> :
                    <FeedbackOptions
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        totalFeedback={totalFeedback}
                        positiveFeedback={positiveFeedback}
                    />}
        
            </FeedbackBlock>
           

        )
    }

}