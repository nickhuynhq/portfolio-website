import ReactGA from "react-ga";

export const handleEventTracking = (
  category: string,
  action: string,
  label: string
) => {
  ReactGA.event({ category: category, action: action, label: label });
};
