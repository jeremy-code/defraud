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

const SignInForm = ({ id, name, type }: ProviderRecord) => {
  const signInAction = async (formData: FormData) => {
    "use server";
    await signIn(id, formData);
  };

  switch (type) {
    case "email":
      return (
        <>
          <form className="flex flex-col gap-2" action={signInAction}>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="postel@example.com"
              required
            />

            <LoadingButton type="submit" className="my-1">
              Sign in with Email
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
        <form className="flex flex-col" action={signInAction}>
          <OAuthButton type="submit" id={id}>
            Sign in with {name}
          </OAuthButton>
        </form>
      );
    default:
      throw new TypeError(`"${type}" is not a valid provider type.`);
  }
};

const SignIn = () => {
  return (
    <main className="grid place-content-center gap-8">
      <Logo className="mx-auto size-14" />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription>
            Enter your email below to sign in to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {providerRecords.map((provider) => (
            <SignInForm key={provider.id} {...provider} />
          ))}
        </CardContent>
      </Card>
      <div className="text-center text-sm">
        {"Don't have an account? "}
        <Link href="/signup" className="text-primary underline">
          Sign up
        </Link>
      </div>
    </main>
  );
};

export default SignIn;
