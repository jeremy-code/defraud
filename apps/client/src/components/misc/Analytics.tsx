import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Shared props between VercelAnalytics and SpeedInsights
type AnalyticsProps = {
  debug?: boolean;
  route?: string | null;
  scriptsrc?: string;
  endpoint?: string;
};

export const Analytics = (props: AnalyticsProps) => {
  return (
    <>
      <VercelAnalytics {...props} />
      <SpeedInsights {...props} />
    </>
  );
};
