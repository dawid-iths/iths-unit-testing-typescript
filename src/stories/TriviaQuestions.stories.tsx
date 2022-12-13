import { Meta, Story } from "@storybook/react";

import TriviaQuestion, { TriviaRequestProps } from '../components/Trivia/TriviaQuestion';

export default {
  title: 'Triva question!',
  component: TriviaQuestion,
} as Meta;


const Template: Story<TriviaRequestProps> = (args: TriviaRequestProps) => { return <TriviaQuestion limit={args.limit} /> };

export const GetOne = Template.bind({});
GetOne.args = {
  limit: 1
}

export const GetTwo = Template.bind({});
GetTwo.args = {
  limit: 2,
};


