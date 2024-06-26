import { cva, type VariantProps } from "class-variance-authority";

import { Button, type ButtonProps } from "@defraud/ui/components";
import type { ProviderRecord } from "@/lib/auth";
import { OAuthIcon } from "./OAuthIcon";

const oAuthButtonVariants = cva<{
  id: Record<ProviderRecord["id"], string>;
}>(undefined, {
  variants: {
    id: {
      github:
        "bg-gray-950 text-background hover:bg-gray-800 dark:bg-gray-50 dark:hover:bg-gray-200",
      discord: "bg-[#5865F2] text-white hover:bg-[#8891F2]",
    },
  },
});

type OAuthButtonProps = Required<VariantProps<typeof oAuthButtonVariants>> &
  ButtonProps;

export const OAuthButton = ({
  id,
  className,
  children,
  ...rest
}: OAuthButtonProps) => {
  return (
    <Button className={oAuthButtonVariants({ id, className })} {...rest}>
      <OAuthIcon id={id} />
      {children}
    </Button>
  );
};
