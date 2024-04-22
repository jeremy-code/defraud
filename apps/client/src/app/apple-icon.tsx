import { ImageResponse } from "next/og";

import { Logo } from "@/components/misc/Logo";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

const AppleIcon = () =>
  new ImageResponse(
    (
      <div
        /**
         * @remarks
         *
         * div must have explicit "display: flex" or "display: none" if it has
         * more than one child node.
         *
         * @remarks
         *
         * apple-touch-icon cannot have a transparent background, and defaults
         * to black
         */
        tw={`flex w-[${size.width}px] h-[${size.height}px] bg-white p-8`}
      >
        <Logo width="100%" height="100%" />
      </div>
    ),
    { ...size },
  );

export default AppleIcon;
