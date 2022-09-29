import {Button, Statistic} from './FeedbackStyled'

export default function Statistics({ addFeedback }) {
    return( <Statistic>
                    <Button onClick={() => addFeedback('good')}>Good</Button>
                    <Button onClick={() => addFeedback('neutral')}>Neutral</Button>
                    <Button onClick={() => addFeedback('bad')}>Bad</Button>
                </Statistic>

    )
   
}