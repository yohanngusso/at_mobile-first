import './Result.css';

import PropTypes from 'prop-types';
import './Result.css';

export default function Result({ score, total }) {
    return (
        <div className="result">
            <h2>Resultado</h2>
            <p>
                Você acertou {score} de {total} questões.
            </p>
        </div>
    );
}

Result.propTypes = {
    score: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
};