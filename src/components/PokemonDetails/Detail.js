import React from 'react'
import './Detail.css'
import Pokebola from '../../assets/img/pokebola.svg'

export const Detail = ({data}) => {

  const classData = () => {
    if(data.sprites.other.dream_world.front_default){
      return {src: data.sprites.other.dream_world.front_default, class: 'image-pokemon-svg'}
    }
    else if(data.sprites.other.home.front_default){
      return {src: data.sprites.other.home.front_default, class: 'image-pokemon-png'}
    }
    else {
      return {src: Pokebola, class: 'image-pokebola-png'}
    }
    
  }

  const firstLetterUpper = (word) =>  (word[0].toUpperCase() + word.substring(1))
 
  console.log(data);
  return (
    <div className='card-pokemon'>

      <p className='feature--hp'>HP : <b>{data.stats[0].base_stat}</b> </p>

      <div className={`container-img back-${data.types[0].type.name}`}>
        <div className='info-left'>
          <h3 className='info-left--id'>#{data.id}</h3>
          <h3 className='info-left--name'>{firstLetterUpper(data.name)}</h3>
        </div>
        <img className={classData().class} src={classData().src} alt={data.name}/>
      </div>

      <div className='features-others'>
        <span>Altura: <b>{data.height/10} m </b> </span>
        <span>Peso: <b>{data.weight/10} Kg </b>  </span>
      </div>

      <div className='features'>
        <div className='features-container'>
          <span>Ataque:  </span>
          <b>{data.stats[1].base_stat}</b>
        </div>
        <div className='features-container'>
          <span>Defensa:  </span>
          <b>{data.stats[2].base_stat}</b>
        </div>
        <div className='features-container'>
          <span>Ataque Especial:  </span>
          <b>{data.stats[3].base_stat}</b>
        </div>
        <div className='features-container'>
          <span>Defensa Especial:  </span>
          <b>{data.stats[4].base_stat}</b>
        </div>
      </div>

      <div className='container-type'>
        Tipo: 
        {
          data.types.map((element) => (
            <div className={`${element.type.name} type`} key={element.type.name}> {element.type.name} </div>
          ))
        }
      </div>

    </div>
  )
}
