import "./AboutCards.scss";
const AboutCards = ({ logo, section }: any) => {
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
