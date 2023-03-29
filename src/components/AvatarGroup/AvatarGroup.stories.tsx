import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MAX_LIMIT_AVATAR, MOCK_IMAGES } from '../../utils/constants';

import AvatarGroup from './AvatarGroup';

export default {
  title: 'Example/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AvatarGroup>;

const Template: ComponentStory<typeof AvatarGroup> = (args) => (
  <div style={{ padding: 14 }}>
    <AvatarGroup {...args} />
  </div>
);

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  avatars: MOCK_IMAGES,
  size: 'xs',
  maxLength: MAX_LIMIT_AVATAR
};

export const Small = Template.bind({});
Small.args = {
  avatars: MOCK_IMAGES,
  size: 'sm',
  maxLength: MAX_LIMIT_AVATAR
};

export const Medium = Template.bind({});
Medium.args = {
  avatars: MOCK_IMAGES,
  size: 'md',
  maxLength: MAX_LIMIT_AVATAR
};

export const Large = Template.bind({});
Large.args = {
  avatars: MOCK_IMAGES,
  size: 'lg',
  maxLength: MAX_LIMIT_AVATAR
};
