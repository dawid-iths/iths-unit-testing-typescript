import { render, screen, waitFor, within } from '@testing-library/react';
import TriviaQuestion, { TriviaRequestProps } from '../../components/Trivia/TriviaQuestion';
import GetTriviaQuestions from "../../repository/TriviaRepository";

describe('Trivia Question component End-2-End tests', () => {
    // beforeEach(() => console.log('beforeEach'));
    // afterEach(() => console.log('afterEach'));
    test('If the api is fetching successfully Question is rendered', async () => {

        //arrange
        const expectedText = /Question/i;
        let props: TriviaRequestProps = { limit: 1 };

        //act
        render(<TriviaQuestion {...props} />);

        //assert
        expect(await screen.findByText(expectedText)).toBeInTheDocument();
    })

    it('Check that api fetches the correct amount of records', async () => {

        //arrange   
        let props: TriviaRequestProps = { limit: 1 };

        //act
        var result = await GetTriviaQuestions(props);

        //assert
        expect(result.length).toEqual(props.limit);
    });

    test('Mocking Trivia API', async () => {

        //arrange   
        const fakeResponse = [{
            "category": "Entertainment: Video Games", "id": "1", "correctAnswer": "Mario",
            "incorrectAnswers": ["Luigi", "Peach", "Bowser"],
            "question": "Who is the main character of the Super Mario series?",
            "tags": ["mario", "nintendo", "plumber", "super mario"],
            "type": "multiple", "difficulty": "easy", "isNiche": false
        }];

        let props: TriviaRequestProps = { limit: 1 };

        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve(fakeResponse)
        })) as jest.Mock;

        //act
        const result = await GetTriviaQuestions(props);

        //assert
        expect(result.length).toBe(props.limit);
        expect(result).toEqual(fakeResponse);

    });
})


