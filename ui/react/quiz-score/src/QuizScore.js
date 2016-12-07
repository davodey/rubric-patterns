import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import './quiz-score.css';

const QuizScore = (props) => {
    return (
        <div className="progress-container">
            <CircularProgressbar percentage={props.percentage} />
        </div>
    )
};
export default  QuizScore

