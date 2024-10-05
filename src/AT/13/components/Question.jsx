import { useState } from 'react';
import './Question.css';
import PropTypes from 'prop-types';

export default function Question({ question, onAnswer, showJustification, onNextQuestion }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (index) => {
        setSelectedOption(index);
    };

    const handleConfirmClick = () => {
        onAnswer(selectedOption === question.correct);
    };

    return (
        <div className="question">
            <h2>{question.question}</h2>
            <div className="options">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className={`option ${selectedOption === index ? 'selected' : ''}`}
                        onClick={() => handleOptionClick(index)}
                        disabled={showJustification}
                    >
                        {option}
                    </button>
                ))}
            </div>
            {!showJustification ? (
                <button onClick={handleConfirmClick} disabled={selectedOption === null}>Confirmar</button>
            ) : (
                <div className="justification">
                    <p>{question.justification}</p>
                    <button onClick={onNextQuestion}>Próxima</button>
                </div>
            )}
        </div>
    );
}

Question.propTypes = {
    question: PropTypes.shape({
        question: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
        correct: PropTypes.number.isRequired,
        justification: PropTypes.string
    }).isRequired,
    onAnswer: PropTypes.func.isRequired,
    showJustification: PropTypes.bool.isRequired,
    onNextQuestion: PropTypes.func.isRequired
};