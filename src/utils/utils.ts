import ReactGA from "react-ga";

export const useAnalyticsEventTracker = (
  category: string,
  action: string,
  label: string
) => {
  ReactGA.event({ category, action, label });
};
