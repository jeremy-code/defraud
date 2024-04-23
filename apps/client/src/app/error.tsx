"use client";

import Link from "next/link";

type ErrorProps = {
  error: Error & { digest: string };
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div>
      <h1>Error</h1>
      <p>Unfortunately, an error has occurred.</p>
      <p>{error.message}</p>
      <div>
        <button
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
        <Link href="/">
          <button>Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
