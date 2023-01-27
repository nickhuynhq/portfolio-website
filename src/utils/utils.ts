import ReactGA from "react-ga";

export const EventTracker = (
  category: string,
  action: string,
  label: string
) => {
  ReactGA.event({ category, action, label });
};
