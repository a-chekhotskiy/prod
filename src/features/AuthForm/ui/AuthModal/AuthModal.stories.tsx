import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AuthModal } from './AuthModal';

export default {
    title: 'shared/AuthModal',
    component: AuthModal,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof AuthModal>;

const Template: ComponentStory<typeof AuthModal> = (args) => <AuthModal {...args} />;

export const PrimaryInput = Template.bind({});
PrimaryInput.args = {
    open: true,
};
