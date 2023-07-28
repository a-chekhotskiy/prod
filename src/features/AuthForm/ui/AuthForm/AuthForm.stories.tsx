import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AuthForm } from './AuthForm';

export default {
    title: 'shared/Input',
    component: AuthForm,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof AuthForm>;

const Template: ComponentStory<typeof AuthForm> = (args) => <AuthForm {...args} />;

export const PrimaryInput = Template.bind({});
PrimaryInput.args = {};
