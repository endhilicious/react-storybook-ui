import { FC } from 'react';
import cx from 'classnames';
import { Size } from '../../utils/globalTypes';
import { getAbbreviatedName, getAvatarTextSize, getSize } from '../../utils/helper';

import styles from './styles.module.scss';
import { ALT_IMAGE, DEFAULT_AVATAR_NAME } from '../../utils/constants';


interface AvatarProps {
  classNames?: string;
  avatarName?: string;
  hideImage?: boolean;
  src: string;
  size: Size;
}

const Avatar: FC<AvatarProps> = ({
  src,
  size,
  classNames = '',
  avatarName = DEFAULT_AVATAR_NAME,
  hideImage = false 
}) => {
  if (hideImage)
    return (
      <div
        className={cx(styles.Avatar__nameOnly, classNames)}
        style={{ width: getSize(size), height: getSize(size) }}
      >
        <span style={{ fontSize: getAvatarTextSize(size) }}>
          {getAbbreviatedName(avatarName)}
        </span>
      </div>
    )

  return (
    <img
      src={src}
      alt={src}
      className={cx(styles.Avatar__image, classNames)}
      width={getSize(size)}
      height={getSize(size)}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = ALT_IMAGE;
      }}
    />
  );
};

export default Avatar;
