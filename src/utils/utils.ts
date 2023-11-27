import ReactGA from "react-ga4";

export const handleEventTracking = (
  category: string,
  action: string,
  label: string
) => {
  ReactGA.event({ category: category, action: action, label: label });
};

export const resumeLink = "https://drive.google.com/file/d/1dyg9b93L9mZy-z3YbFpu6-TQZ6-rJ1-0/view?usp=sharing"