import { FC, Fragment } from 'react';
import { DEFAULT_AVATAR_NAME } from '../../utils/constants';

import { Size } from '../../utils/globalTypes';
import { getAvatarTextSize, getSize } from '../../utils/helper';
import Avatar from '../Avatar/Avatar';
import styles from './styles.module.scss';

interface AvatarGroupProps {
  maxLength: number;
  size: Size;
  hideImage?: boolean;
  avatars: string[];
}

const AvatarGroup: FC<AvatarGroupProps> = ({ maxLength, size, avatars, hideImage }) => {
  const visibleAvatars = avatars.slice(0, maxLength);

  return (
    <div className={styles.AvatarGroup__wrapper} data-testid="avatar-group">
      {visibleAvatars.map((avatar, index) => (
        <Fragment key={index}>
          <Avatar
            src={avatar}
            size={size}
            classNames={styles.AvatarGroup__imageAvatar}
            hideImage={hideImage}
            avatarName={DEFAULT_AVATAR_NAME} // TAMBAHAN / TODO: customized as needed
          />
        </Fragment>
      ))}
      {avatars.length > maxLength && (
        <div
          className={styles.AvatarGroup__lists}
          style={{
            width: getSize(size),
            height: getSize(size),
          }}
        >
          <span style={{ fontSize: getAvatarTextSize(size) }}>+ {avatars.length - maxLength}</span>
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
