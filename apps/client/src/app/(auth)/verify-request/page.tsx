import { headers } from "next/headers";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@defraud/ui/components";
import { Logo } from "@/components/misc";

const VerifyRequest = () => {
  const host = headers().get("host");

  return (
    <main className="grid place-content-center gap-8">
      <Logo className="mx-auto size-14" />
      <Card className="w-full max-w-sm overflow-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Check your email</CardTitle>
          <CardDescription>
            {"We've sent you a message to verify your email address."}
          </CardDescription>
        </CardHeader>
        <hr />
        <CardContent className="flex flex-col gap-4 bg-secondary p-6">
          <p className="leading-relaxed tracking-tight">
            {"You should receive an email shortly with a link to sign in from "}
            <a
              className="font-semibold text-primary underline"
              href="mailto:no-reply@defraud.io"
            >
              no-reply@defraud.io
            </a>
            {" with subject: "}
            <code className="overflow-x-scroll whitespace-pre rounded bg-background p-1">
              {"Sign in to "}
              <span className="font-semibold">{host ?? "Unknown host"}</span>
            </code>
          </p>
          <p className="leading-relaxed tracking-tight">
            {"If you don't receive an email, please check your spam folder."}
          </p>
        </CardContent>
      </Card>
    </main>
  );
};

export default VerifyRequest;
