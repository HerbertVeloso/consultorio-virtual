import { Icon } from '../../types/Icon';

export function PatientIcon({ size, color, ...props }: Icon) {
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
        d="M28 8a4 4 0 11-8 0 4 4 0 018 0zM18 18.82c-.217.513-.41 1.19-.564 1.995C17.03 22.931 17 25.273 17 26a2 2 0 11-4 0c0-.773.026-3.431.508-5.94.238-1.236.616-2.607 1.265-3.717.651-1.115 1.822-2.343 3.671-2.343h11.112c1.849 0 3.02 1.228 3.671 2.343.649 1.11 1.027 2.48 1.265 3.717.482 2.509.508 5.167.508 5.94a2 2 0 11-4 0c0-.727-.03-3.069-.436-5.185-.155-.805-.347-1.482-.564-1.994V42a2 2 0 01-3.994.153l-1-13A2.02 2.02 0 0125 29h-2c0 .051-.002.102-.006.153l-1 13A2 2 0 0118 42V18.82z"
        fill={iconColor}
      />
    </svg>
  );
}
