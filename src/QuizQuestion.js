import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            incorrectAnswer: false
        };
    }

    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
        }
        else {
            this.setState({
                incorrectAnswer: true,
            });
        }
    }

    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className='buttons'>
                    <ul>
                        {this.props.quiz_question.answer_options.map((answer, index) => {
                            return <QuizQuestionButton clickHandler={this.handleClick}
                                button_text={answer} key={index} />
                        })}
                    </ul>
                </section>
                {
                    this.state.incorrectAnswer ?
                        <p className='error'>Sorry, that's not right.</p> : null
                }
            </main>
        )
    }
}

export default QuizQuestion;