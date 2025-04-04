import { createIcon, IconProps } from "./createIcon";

export type { IconProps };

export const InfoIcon = createIcon({
  viewBox: "0 0 24 24",
  path: (
    <g>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </g>
  ),
});

export const ErrorIcon = createIcon({
  viewBox: "0 0 24 24",
  path: (
    <g>
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </g>
  ),
});

export const SuccessIcon = createIcon({
  viewBox: "0 0 24 24",
  path: (
    <g>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </g>
  ),
});
