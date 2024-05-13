import Image, { type ImageProps } from "next/image";
import { cn } from "@defraud/ui/utils";

export type ThemeImageProps = Omit<
  ImageProps,
  // Lazy loading is required, otherwise, both images will be loaded
  "src" | "priority" | "loading"
> & {
  src: {
    light: ImageProps["src"];
    dark: ImageProps["src"];
  };
};

/**
 * Correct usage for Light/Dark image switching per
 * {@link https://nextjs.org/docs/pages/api-reference/components/image#theme-detection-css}
 *
 * Using <picture>, <source>, and getImageProps() does not work since light/dark
 * mode is styled using data attributes and not media queries
 * (prefers-color-scheme: dark), leading to conflicting styles.
 */
export const ThemeImage = ({
  src,
  alt,
  className,
  ...rest
}: ThemeImageProps) => {
  return (
    <>
      <Image
        src={src.light}
        // explicitly passing props per
        // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md#rule-options
        alt={`${alt} (light)`}
        className={cn("dark:hidden", className)}
        {...rest}
      />
      <Image
        src={src.dark}
        alt={`${alt} (dark)`}
        className={cn("hidden dark:block", className)}
        {...rest}
      />
    </>
  );
};
