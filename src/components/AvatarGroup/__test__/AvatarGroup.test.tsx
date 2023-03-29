import { render, screen } from '@testing-library/react';
import AvatarGroup from '../AvatarGroup';

describe('AvatarGroup', () => {
  const avatars = [
    'https://example.com/avatar1.jpg',
    'https://example.com/avatar2.jpg',
    'https://example.com/avatar3.jpg',
  ];

  it('renders the default component properly', () => {
    render(<AvatarGroup maxLength={3} size="md" avatars={avatars} />);
    const avatarGroupElement = screen.getByTestId('avatar-group');

    expect(avatarGroupElement).toBeInTheDocument();
    expect(avatarGroupElement).toHaveClass('AvatarGroup__wrapper');

    const avatarElements = screen.getAllByAltText(/avatar/);
    expect(avatarElements).toHaveLength(3);
    avatarElements.forEach((avatarElement) => {
      expect(avatarElement).toHaveClass('Avatar__image');
    });

    const avatarListElement = screen.queryByRole('div', { name: '+ 0' });
    expect(avatarListElement).not.toBeInTheDocument();
  });

  test('AvatarGroup > renders avatars according to maxLength prop', () => {
    const maxLength = 2;
    render(<AvatarGroup avatars={avatars} size="md" maxLength={maxLength} />);
  
    const avatarGroupElement = screen.getByTestId('avatar-group');
    expect(avatarGroupElement).toBeInTheDocument();
  
    const avatarImages = screen.getAllByRole('img');
    expect(avatarImages.length).toEqual(maxLength);
  
    const avatarListElement = screen.getByText(`+ ${avatars.length - maxLength}`);
    expect(avatarListElement).toBeInTheDocument();
  });
  

  it('renders the name-only component when hideImage prop is true', () => {
    const avatars = ['https://example.com/avatar1.jpg', 'https://example.com/avatar2.jpg'];
    render(<AvatarGroup maxLength={2} size="md" avatars={avatars} hideImage />);
    const nameOnlyElement = screen.queryByTestId('avatar-group');
    expect(nameOnlyElement).toBeInTheDocument();
    expect(nameOnlyElement).toHaveClass('AvatarGroup__wrapper');
    expect(screen.queryByText('+ 1')).toBeNull();
  });

  it('matches snapshot', () => {
    const { container } = render(<AvatarGroup maxLength={2} size="md" avatars={avatars} />);
    expect(container).toMatchSnapshot();
  });
});
