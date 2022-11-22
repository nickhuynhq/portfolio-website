import React from 'react'


const ExperienceCard = ({role}) => {
  return (
    <section className='experience-card'>
      <div className='experience-card__info-container'>
        <h2 className='experience-card__title'>{role.title}</h2>
        <h3 className='experience-card__company'>{role.company}</h3>
        <p>{role.start_date} - {role.end_date}</p>
        <ul className='experience-card__list'>
          {role.description.map((point: String) => 
            <li className='experience-card__list-item'>
              {point}
            </li>
          )}
        </ul>
      </div>
      <div className='experience-card__image-container'>
        <img className='experience-card__image' src={role.image} alt={role.company}/>
      </div>
      

    </section>
  )
}

export default ExperienceCard

