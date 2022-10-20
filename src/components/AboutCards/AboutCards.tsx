import "./AboutCards.scss";
const AboutCards = ({ logo }: any) => {
  return (
    <div className="about-cards">
      <img
        className="about-cards__logo"
        title={`${logo}`}
        src={require(`../../assets/logos/${logo}-logo.png`)}
        alt={`${logo}`}
      />
    </div>
  );
};

export default AboutCards;
