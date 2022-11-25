import "./AboutCards.scss";

interface IProps {
  section: string;
  logo: string;
}

const AboutCards = ({ logo, section }: IProps) => {
  return (
    <div className={`${section}-cards`}>
      <img
        className={`${section}-cards__logo`}
        title={`${logo}`}
        src={require(`../../assets/logos/${logo}-logo.png`)}
        alt={`${logo}`}
      />
    </div>
  );
};

export default AboutCards;
