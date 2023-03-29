export const getSize = (size: string): number => {
  switch (size) {
    case 'xs':
      return 24;
    case 'md':
      return 48;
    case 'lg':
      return 64;
    case 'sm':
    default:
      return 32;
  }
};

export const getAvatarTextSize = (size: string): number => {
  switch (size) {
    case 'xs':
      return 8;
    case 'md':
      return 20;
    case 'lg':
      return 24;
    case 'sm':
    default:
      return 14;
  }
};

export const getAbbreviatedName = (name: string): string | null => {
  if (!name) return null;
  const maxWords = 2;
  const cleanedName = name.replace(/\s+\.\s+/g, ' ');
  const nameWords = cleanedName.split(' ');
  const abbreviation = nameWords
    .slice(0, maxWords)
    .map((word) => word.charAt(0))
    .join('');
  return abbreviation;
}
