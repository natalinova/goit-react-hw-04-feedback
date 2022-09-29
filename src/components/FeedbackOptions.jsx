import {Options, Title} from './FeedbackStyled';

export default function FeedbackOptions({ good, neutral,bad, totalFeedback, positiveFeedback}) {
    return (<Options>
                    <Title> Statistic</Title>
                    <p>Good:{ good}</p>
                    <p>Neutral:{neutral}</p>
                    <p>Bad:{bad}</p>
                    <p>Total Feedback: {totalFeedback}</p>
                    <p>Positive Feedback: { positiveFeedback} %</p>
                </Options>)
}