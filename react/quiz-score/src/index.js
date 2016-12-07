import React from 'react';
import ReactDOM from 'react-dom';
import QuizScore from './QuizScore'
import './index.css';

ReactDOM.render(
    <QuizScore percentage={75} />,
  document.getElementById('root')
);
