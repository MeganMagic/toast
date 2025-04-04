import { ReactElement, SVGAttributes } from "react";

export type CreateIconOptions = {
  viewBox: string;
  d?: string;
  path?: ReactElement | ReactElement[];
  strokeWidth?: number;
};

export type IconProps = Omit<SVGAttributes<SVGElement>, "width" | "height"> & {
  size: number;
};

export const createIcon = ({
  viewBox,
  d,
  path,
  strokeWidth = 1.8,
}: CreateIconOptions) => {
  return ({ size, ...props }: IconProps) => (
    <svg width={size} height={size} viewBox={viewBox} fill="none" {...props}>
      {d ? (
        <path
          d={d}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      ) : (
        path
      )}
    </svg>
  );
};
