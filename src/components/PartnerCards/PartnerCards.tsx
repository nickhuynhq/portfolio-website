import React from 'react'

interface PartnerCardsInterface {
    partnerName: string,
    image: string,
    link: string
}

const PartnerCards = ({partnerName, image, link}: PartnerCardsInterface) => {
  return (
    <a href={link}>
        <img src={image} alt={partnerName}/>
    </a> 
  )
}

export default PartnerCards