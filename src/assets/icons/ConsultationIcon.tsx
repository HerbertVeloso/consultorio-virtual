import { Icon } from '../../types/Icon';

export function ConsultationIcon({ size, color, ...props }: Icon) {
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
        d="M12 10a2 2 0 10-1.732-3H10a3 3 0 00-3 3v9c-.552 0-1.005.449-.955.999A11 11 0 0014 29.583V32c0 1.306.835 2.418 2 2.83a7.25 7.25 0 0014.5-.08v-4a3.75 3.75 0 117.5 0v2.42a3.001 3.001 0 102 0v-2.42a5.75 5.75 0 00-11.5 0v4a5.25 5.25 0 01-10.5.08A3.001 3.001 0 0020 32v-2.417a11 11 0 007.955-9.584c.05-.55-.403-.999-.955-.999v-9a3 3 0 00-3-3h-.268A2 2 0 0020 8a2 2 0 003.732 1H24a1 1 0 011 1v9h.21c-.553 0-.993.45-1.07.997a7.21 7.21 0 01-14.28 0C9.783 19.45 9.343 19 8.79 19H9v-9a1 1 0 011-1h.268A2 2 0 0012 10z"
        fill={iconColor}
      />
    </svg>
  );
}
