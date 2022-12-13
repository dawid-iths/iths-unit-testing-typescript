
import React, { useState, useEffect } from "react"
import GetTriviaQuestions from "../../repository/TriviaRepository";

export interface TriviaRequestProps {
    limit: number
}

export interface TriviaQuestionProps {
    category: string,
    id: string,
    correctAnswer: string,
    incorrectAnswers: string[],
    question: string,
    tags: string[],
    type: string,
    difficulty: string,
    isNiche: boolean
}

const TriviaQuestion: React.FC<TriviaRequestProps> = (props) => {

    const [questions, setQuestions] = useState<Array<TriviaQuestionProps>>([]);

    useEffect(() => {
        const fetchTriviaQuestions = async () => {
            let jsonResponse: Array<TriviaQuestionProps> = await GetTriviaQuestions(props);
            setQuestions(jsonResponse);
        };
        fetchTriviaQuestions();

    }, [props]);

    const RenderQuestions = () => {
        return (
            <>
                {questions.map((question: TriviaQuestionProps, index) => {
                    return (
                        <ul key={index}>
                            <li>Question: {question.question}</li>
                            <li>Answer: {question.correctAnswer}</li>
                            <li>Wrong Answer: <RenderWrongAnswers answers={question.incorrectAnswers} /></li>
                            <li>Difficulty: {question.difficulty}</li>
                            <li>ID: {question.id}</li>
                            <li>Category: {question.category}</li>
                            <li>Type: {question.type}</li>
                            <li>Tags: <RenderTags tags={question.tags} /></li>
                        </ul>
                    )
                })
                }
            </>
        );
    }

    function RenderTags(props: { tags: string[] }) {
        return (
            <ul>
                {props.tags.map((tag: string, index) => {
                    return (<li key={index}>{tag}</li>)
                })
                }
            </ul>
        );
    }

    function RenderWrongAnswers(props: { answers: string[] }) {
        return (
            <ul>
                {props.answers.map((answer: string, index) => {
                    return (<li key={index}>{answer}</li>)
                })
                }
            </ul>
        );
    }

    return (
        <>
            <RenderQuestions></RenderQuestions>
        </>
    );
}
export default TriviaQuestion;