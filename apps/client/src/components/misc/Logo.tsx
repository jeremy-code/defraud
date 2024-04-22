import type { SVGProps } from "react";

export const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
      {...props}
    >
      <path fill="#E63D64" d="M50 0v50H0l50 50 50-50L50 0Z" />
    </svg>
  );
};
