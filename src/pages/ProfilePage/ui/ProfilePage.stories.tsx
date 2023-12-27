import { ComponentStory, ComponentMeta } from '@storybook/react';
import { storeDecorator } from 'shared/config/storybook';
import { COUNTRY, GENDER } from 'shared/constants/types';
import ProfilePage from './ProfilePage';

export default {
    title: 'Pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
    storeDecorator({
        profile: {
            form: {
                firstname: 'Alex',
                lastname: 'Che',
                age: 30,
                gender: GENDER.MALE,
                country: COUNTRY.CZ,
                // eslint-disable-next-line max-len
                avatar: 'https://sun9-36.userapi.com/impg/K_T3NW2WeStTgNameyfvund_IgOq_Atumo9rog/jSiPcmIK-3s.jpg?size=1024x1280&quality=95&sign=57bf11e0b89becdcc1746f129226ed9e&type=album',
                username: 'scubacube',
            },
            isLoading: false,
            readOnly: true,
        },
    }),
];
