import ReactGA from "react-ga4";

export const handleEventTracking = (
  category: string,
  action: string,
  label: string
) => {
  ReactGA.event({ category: category, action: action, label: label });
};
