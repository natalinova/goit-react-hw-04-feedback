
import { Block, Title } from './FeedbackStyled';

 const FeedbackBlock = ({ title, children }) => {
     return (
        <Block>
             <Title>{ title}</Title>
             {children}
        </Block>
        
        
    )

} 

export default  FeedbackBlock