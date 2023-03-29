import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MOCK_IMAGE } from '../../utils/constants';

import Avatar from './Avatar';

export default {
  title: 'Example/Avatar',
  component: Avatar,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <div style={{ padding: 14 }}>
    <Avatar {...args} />
  </div>
);

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  src: MOCK_IMAGE,
  size: 'xs',
};

export const Small = Template.bind({});
Small.args = {
  src: MOCK_IMAGE,
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  src: MOCK_IMAGE,
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  src: MOCK_IMAGE,
  size: 'lg',
};
