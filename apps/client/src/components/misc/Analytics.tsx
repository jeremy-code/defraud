import type { ComponentProps } from "react";
import {
  Analytics as VercelAnalytics,
  type AnalyticsProps as VercelAnalyticsProps,
} from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

type AnalyticsProps = {
  vercelAnalytics?: VercelAnalyticsProps;
  speedInsights?: ComponentProps<typeof SpeedInsights>;
};

export const Analytics = ({
  vercelAnalytics,
  speedInsights,
}: AnalyticsProps) => {
  return (
    <>
      <VercelAnalytics {...vercelAnalytics} />
      <SpeedInsights {...speedInsights} />
    </>
  );
};
