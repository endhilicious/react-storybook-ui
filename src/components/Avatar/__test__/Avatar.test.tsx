import { render, screen } from '@testing-library/react';
import { MOCK_IMAGE } from '../../../utils/constants';
import Avatar from '../Avatar';

describe('Avatar', () => {

  it('renders the default component properly', () => {
    render(<Avatar src={MOCK_IMAGE} size="md" />);
    const avatarElement = screen.getByAltText(MOCK_IMAGE);
  
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveAttribute('src', MOCK_IMAGE);
    expect(avatarElement).toHaveClass('Avatar__image');
    expect(avatarElement).toHaveAttribute('width', '48');
    expect(avatarElement).toHaveAttribute('height', '48');
  });
  

  it('renders avatars with custom size', () => {
    render(<Avatar src={MOCK_IMAGE} size="sm" />);
    const avatarElement = screen.getByAltText(MOCK_IMAGE);

    expect(avatarElement).toHaveAttribute('width', '32');
    expect(avatarElement).toHaveAttribute('height', '32');
  });

  it('renders avatars with additional classNames', () => {
    render(<Avatar src={MOCK_IMAGE} size="md" classNames="custom-class" />);
    const avatarElement = screen.getByAltText(MOCK_IMAGE);

    expect(avatarElement).toHaveClass('Avatar__image');
    expect(avatarElement).toHaveClass('custom-class');
  });

  it('renders the name-only component when hideImage prop is true', () => {
    render(<Avatar src={MOCK_IMAGE} size="md" hideImage avatarName="Oktavianus Octavianus" />);
    const nameOnlyElement = screen.getByText('OO');
  
    expect(nameOnlyElement).toBeInTheDocument();
  });
  

  it('captures a component snapshot file', () => {
    const { asFragment } = render(<Avatar src={MOCK_IMAGE} size="md" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
