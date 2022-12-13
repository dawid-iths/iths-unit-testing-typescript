import { TriviaQuestionProps, TriviaRequestProps } from '../components/Trivia/TriviaQuestion';

const GetTriviaQuestions = async (props: TriviaRequestProps) => {
    const response = await fetch(`https://the-trivia-api.com/api/questions?limit=${props.limit}`)
    let jsonResponse: Array<TriviaQuestionProps> = await response.json()
    return jsonResponse;
};

export default GetTriviaQuestions;