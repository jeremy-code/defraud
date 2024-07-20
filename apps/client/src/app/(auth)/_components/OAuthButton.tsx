import { cva, type VariantProps } from "class-variance-authority";

import { LoadingButton, type LoadingButtonProps } from "@/components/form";
import type { ProviderRecord } from "@/lib/auth";
import { OAuthIcon } from "./OAuthIcon";

const oAuthButtonVariants = cva<{
  id: Record<ProviderRecord["id"], string>;
}>(undefined, {
  variants: {
    id: {
      github:
        "bg-gray-950 text-background hover:bg-gray-800 dark:bg-gray-50 dark:hover:bg-gray-200",
      discord: "bg-[#5865f2] text-white hover:bg-[#8891f2]",
    },
  },
});

type OAuthButtonProps = Required<VariantProps<typeof oAuthButtonVariants>> &
  LoadingButtonProps;

export const OAuthButton = ({
  id,
  className,
  children,
  ...rest
}: OAuthButtonProps) => {
  return (
    <LoadingButton className={oAuthButtonVariants({ id, className })} {...rest}>
      <OAuthIcon id={id} />
      {children}
    </LoadingButton>
  );
};
