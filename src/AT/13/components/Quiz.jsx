import Question from './Question';
import './Quiz.css';
import PropTypes from 'prop-types';

export default function Quiz({ question, onAnswer, showJustification, onNextQuestion }) {
    return (
        <div className="quiz">
            <Question
                question={question}
                onAnswer={onAnswer}
                showJustification={showJustification}
                onNextQuestion={onNextQuestion}
            />
        </div>
    );
}

Quiz.propTypes = {
    question: PropTypes.object.isRequired,
    onAnswer: PropTypes.func.isRequired,
    showJustification: PropTypes.bool.isRequired,
    onNextQuestion: PropTypes.func.isRequired,
};