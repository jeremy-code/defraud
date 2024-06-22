import Link from "next/link";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@defraud/ui/components";
import { Logo } from "@/components/misc/Logo";
import { providerDetails, signIn, type ProviderDetail } from "@/lib/auth";
import { OAuthButton } from "../_components/OAuthButton";

const SignInForm = ({ id, name, type }: ProviderDetail) => {
  switch (type) {
    case "email":
      return (
        <>
          <form
            className="flex flex-col gap-2"
            action={async (formData) => {
              "use server";
              await signIn(id, formData);
            }}
          >
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="postel@example.com"
              required
            />

            <Button type="submit" className="my-1">
              Sign in with Email
            </Button>
          </form>

          <div
            role="separator"
            className="flex items-center text-muted-foreground before:grow before:border-b before:content-[''] after:grow after:border-b after:content-['']"
          >
            <span className="mx-4">OR</span>
          </div>
        </>
      );
    case "oauth":
      return (
        <form
          className="flex flex-col"
          action={async (formData) => {
            "use server";
            await signIn(id, formData);
          }}
        >
          <OAuthButton type="submit" id={id}>
            Sign in with {name}
          </OAuthButton>
        </form>
      );
    default:
      throw new Error(`Unknown provider type: ${type}`);
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
          {providerDetails.map((provider) => (
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
