import {Meta, Story} from "@storybook/react";
import Link, {LinkProps} from '../components/Links/Link';

export default {
  title: 'Länken Demo!',
  component: Link,
} as Meta;


const Template : Story<LinkProps> = (args: LinkProps) => { return <Link page={args.page}>{args.children}</Link> };
export const Primary = Template.bind({});

Primary.args = {
   children: "Till ITHS!",
    page: "https://www.iths.se"
}


