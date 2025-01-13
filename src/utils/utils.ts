import ReactGA from "react-ga4";

export const handleEventTracking = (
  category: string,
  action: string,
  label: string
) => {
  ReactGA.event({ category: category, action: action, label: label });
};

export const resumeLink = "https://drive.google.com/file/d/1mahdIWxnqX2L10I6Cb6hJRxSF8QebOhw/view?usp=sharing"