import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const Analytics = () => {
  return (
    <>
      <VercelAnalytics />
      <SpeedInsights />
    </>
  );
};
