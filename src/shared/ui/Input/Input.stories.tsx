import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const PrimaryInput = Template.bind({});
PrimaryInput.args = {
    type: 'text',
    placeholder: 'type something...',
};
