import { Icon } from '../../types/Icon';

export function ChartIcon({ size, color, ...props }: Icon) {
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
        d="M8 40V7H6v34a1 1 0 001 1h34v-2H8z"
        fill={iconColor}
      />
      <path d="M12 25h6v16h-6V25z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 25a1 1 0 011-1h6a1 1 0 011 1v16a1 1 0 01-1 1h-6a1 1 0 01-1-1V25zm2 1v14h4V26h-4z"
        fill={iconColor}
      />
      <path d="M22 21h6v20h-6V21z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 21a1 1 0 011-1h6a1 1 0 011 1v20a1 1 0 01-1 1h-6a1 1 0 01-1-1V21zm2 1v18h4V22h-4z"
        fill={iconColor}
      />
      <path d="M32 13h6v28h-6V13z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 13a1 1 0 011-1h6a1 1 0 011 1v28a1 1 0 01-1 1h-6a1 1 0 01-1-1V13zm2 1v26h4V14h-4z"
        fill={iconColor}
      />
    </svg>
  );
}
