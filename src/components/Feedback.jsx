import { useState } from "react";
import FeedbackBlock from "./FeedbackBlock";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";

export default function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
   
    const addFeedback = (nameFeedback) => {
        switch (nameFeedback) {
            case 'good':
                setGood(good + 1);
                break;
            case 'neutral':
                setNeutral(neutral + 1);
                break;
            case 'bad':
                setBad(bad + 1);
                break;
            default : {return }     
        }
    }
        
   const  countTotalFeedback = () => {
       
        return good + neutral + bad;
    }
    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        if (!total) {
            return 0
        }
        const value = good;
        const result = ( value/ total) * 100;
        return Number(result.toFixed(2))
    
    }
    
        const totalFeedback = countTotalFeedback();
        const positiveFeedback = countPositiveFeedbackPercentage();
        return (
            <FeedbackBlock title='Please, leave feedback!'>
                <Statistics addFeedback={addFeedback} />
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

// export default class Feedback extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad:0
//     }
//     addFeedback = (nameFeedback) => {
//         this.setState((prevState) => {
//             const value = prevState[nameFeedback];
//             return { [nameFeedback]: value + 1}
//     })
//     }
//     countTotalFeedback() {
//         const { good, neutral, bad } = this.state;
//         return good + neutral + bad;
//     }
//     countPositiveFeedbackPercentage() {
//         const total = this.countTotalFeedback();
//         if (!total) {
//             return 0
//         }
//         const value = this.state.good;
//         const result = ( value/ total) * 100;
//         return Number(result.toFixed(2))
    
//     }
//     render() {
//         const { good, neutral, bad } = this.state;
//         const totalFeedback = this.countTotalFeedback();
//         const positiveFeedback = this.countPositiveFeedbackPercentage();
//         return (
//             <FeedbackBlock title='Please, leave feedback!'>
//                 <Statistics addFeedback={this.addFeedback} />
//                 {!totalFeedback ? <p>There is no feedback</p> :
//                     <FeedbackOptions
//                         good={good}
//                         neutral={neutral}
//                         bad={bad}
//                         totalFeedback={totalFeedback}
//                         positiveFeedback={positiveFeedback}
//                     />}
        
//             </FeedbackBlock>
           

//         )
//     }

