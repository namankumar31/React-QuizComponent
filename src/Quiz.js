import React, { Component } from 'react';
let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1,
        }
    }

    render() {
        return (
            <div>
                <div className='QuizQuestion'>
                    Q{this.state.quiz_position}: {quizData.quiz_questions[this.state.quiz_position].instruction_text}
                </div>
            </div>
        )
    }
}

export default Quiz;