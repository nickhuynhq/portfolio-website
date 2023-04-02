import PartnerCard from "../../components/PartnerCard/PartnerCard";
import "./Partners.scss";
import partnersData from "../../data/partners.json";

const Partners = () => {
  return (
    <section className="partners">
      <h2 className="partners__heading">Client Partners</h2>
      <div className="partners__list">
        {partnersData.map((partner) => (
          <PartnerCard
            key={partner.name}
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
