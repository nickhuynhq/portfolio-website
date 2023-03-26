import PartnerCards from "../../components/PartnerCards/PartnerCards";
import "./Partners.scss";
import partnersData from "../../data/partners.json";

const Partners = () => {
  return (
    <section className="partners">
      <h2 className="partners__heading">Custom Work</h2>
      <div className="partners__list">
        {partnersData.map((partner) => (
          <PartnerCards
            partnerName={partner.name}
            image={partner.image}
            link={partner.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Partners;
