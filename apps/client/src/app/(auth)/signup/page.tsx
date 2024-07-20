import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@defraud/ui/components";
import { LoadingButton } from "@/components/form";
import { Logo } from "@/components/misc/Logo";
import { providerRecords, signIn, type ProviderRecord } from "@/lib/auth";
import { OAuthButton } from "../_components/OAuthButton";

const SignUpForm = ({ id, name, type }: ProviderRecord) => {
  const signUpAction = async (formData: FormData) => {
    "use server";
    await signIn(id, formData);
  };

  switch (type) {
    case "email":
      return (
        <>
          <form className="flex flex-col gap-2" action={signUpAction}>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="postel@example.com"
              required
            />

            <LoadingButton type="submit" className="my-1">
              Sign up with Email
            </LoadingButton>
          </form>

          <div
            role="separator"
            className="flex items-center text-muted-foreground before:grow before:border-b after:grow after:border-b"
          >
            <span className="mx-4">OR</span>
          </div>
        </>
      );
    case "oauth":
      return (
        <form className="flex flex-col" action={signUpAction}>
          <OAuthButton type="submit" id={id}>
            Sign up with {name}
          </OAuthButton>
        </form>
      );
    default:
      throw new TypeError(`"${type}" is not a valid provider type.`);
  }
};

const SignUp = () => {
  return (
    <main className="grid place-content-center gap-8">
      <Logo className="mx-auto size-14" />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Sign up</CardTitle>
          <CardDescription>
            Enter your email below to create your new account.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {providerRecords.map((provider) => (
            <SignUpForm key={provider.id} {...provider} />
          ))}
        </CardContent>
      </Card>
      <div className="text-center text-sm">
        {"Already have an account? "}
        <Link href="/signin" className="text-primary underline">
          Sign in
        </Link>
      </div>
    </main>
  );
};

export default SignUp;
