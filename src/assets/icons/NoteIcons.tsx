import { Icon } from '../../types/Icon';

export function NoteIcon({ size, color, ...props }: Icon) {
  const iconSize = size ? size : '64';
  const iconColor = color ? color : 'currentColor';

  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 8h4v2a1 1 0 102 0V8h8v2a1 1 0 102 0V8h1a3 3 0 013 3v24a3 3 0 01-3 3H13a3 3 0 01-3-3V11a3 3 0 013-3zm2 10a1 1 0 100 2h13a1 1 0 100-2H15zm-1 6a1 1 0 011-1h7a1 1 0 110 2h-7a1 1 0 01-1-1zm1 4a1 1 0 100 2h11a1 1 0 100-2H15z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 10v25a5 5 0 005 5h17v2H13a7 7 0 01-7-7V10h2zM39 10a3 3 0 00-3 3v3h6v-3a3 3 0 00-3-3zm3 8h-6v15l3 4 3-4V18zM26 6a1 1 0 011 1v4a1 1 0 11-2 0V7a1 1 0 011-1zM16 6a1 1 0 011 1v4a1 1 0 11-2 0V7a1 1 0 011-1z"
        fill={iconColor}
      />
    </svg>
  );
}
