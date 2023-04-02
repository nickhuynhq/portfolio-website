import "./PartnerCard.scss";

interface PartnerCardInterface {
  partnerName: string;
  image: string;
  link: string;
}

const PartnerCard = ({ partnerName, image, link }: PartnerCardInterface) => {
  return (
    <a
      href={link}
      title={partnerName}
      target="_blank"
      rel="noopener noreferrer"
      className="partner-card"
    >
      <img src={image} alt={partnerName} className="partner-card__image" loading="lazy" />
      <p className="partner-card__tooltip">{partnerName.toUpperCase()}</p>
    </a>
  );
};

export default PartnerCard;
