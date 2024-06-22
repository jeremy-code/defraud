import { cva, type VariantProps } from "class-variance-authority";

import { Button, type ButtonProps } from "@defraud/ui/components";
import { type ProviderDetail } from "@/lib/auth";
import { OAuthIcon } from "./OAuthIcon";

const oAuthButtonVariants = cva<{
  id: Record<ProviderDetail["id"], string>;
}>(undefined, {
  variants: {
    id: {
      github:
        "bg-gray-950 text-background hover:bg-gray-800 dark:bg-gray-50 dark:hover:bg-gray-200",
      discord: "bg-[#5865F2] text-white hover:bg-[#8891F2]",
    },
  },
});

type OAuthButtonProps = ButtonProps & VariantProps<typeof oAuthButtonVariants>;

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
