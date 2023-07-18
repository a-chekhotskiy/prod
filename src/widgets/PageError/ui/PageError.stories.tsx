import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageError } from './PageError';
import { Theme } from 'app/providers/ThemeProvider';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';

export default {
  title: 'widgets/PageError',
  component: PageError,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Default = Template.bind({});
Default.args = {};
