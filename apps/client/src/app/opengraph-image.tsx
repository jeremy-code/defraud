import { ImageResponse } from "next/og";

import { Logo } from "@/components/misc/Logo";

export const alt = "Defraud OG Image";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const OpenGraphImage = async () => {
  // Satori doesn't support variable fonts and only supports TTF, OTF, and WOFF.
  // Note: Next.js caches fetch calls in the server.
  const lexendSemiBold = fetch(
    "https://github.com/googlefonts/lexend/raw/main/fonts/lexend/ttf/Lexend-SemiBold.ttf",
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="flex h-full w-full items-center justify-center bg-white">
        <div
          tw="flex"
          // Tailwind CSS flex gap classes seem to not work, see
          // https://github.com/vercel/satori/pull/513
          style={{ gap: "1.5rem" }}
        >
          <Logo />
          <p tw="text-6xl">defraud</p>
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
