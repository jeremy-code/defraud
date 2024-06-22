import { ImageResponse } from "next/og";
import ky from "ky";

import { Logo } from "@/components/misc/Logo";

export const alt = "Defraud OG Image";

export const size = {
  width: 1200,
  height: 630,
};

// Satori doesn't support variable fonts and only supports TTF, OTF, and WOFF.
// https://github.com/vercel/satori#fonts
const lexendSemiBold = ky(
  // See https://docs.github.com/en/rest/repos/contents
  "https://api.github.com/repos/googlefonts/lexend/contents/fonts/lexend/ttf/Lexend-SemiBold.ttf",
  {
    cache: "force-cache",
    headers: {
      Accept: "application/vnd.github.raw+json", //  Returns the raw file contents for files and symlinks.
    },
  },
).arrayBuffer();

const OpenGraphImage = async () => {
  return new ImageResponse(
    (
      // eslint-disable-next-line tailwindcss/enforces-shorthand -- `size-full` is not supported in Satori
      <div tw="flex h-full w-full items-center justify-center bg-white">
        <div
          tw="flex"
          // Tailwind CSS flex gap classes are currently not supported, though
          // the actual CSS property is supported. See
          // https://github.com/vercel/satori/issues/615
          style={{ gap: "1.5rem" }} // sizes.6 (24px)
        >
          <Logo />
          <p tw="text-6xl">Defraud</p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Lexend",
          data: await lexendSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
};

export default OpenGraphImage;
