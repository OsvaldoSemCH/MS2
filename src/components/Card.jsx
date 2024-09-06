import style from './Card.module.css'

/* eslint-disable react/prop-types */
export const Card = ({name, desc, value, image, category, status}) => {
  return(
      <div className={style.Card}>
        <div className={style.Status} style={status ? {backgroundColor: '#00c000'} : {backgroundColor: '#c00000'}}></div>
          <p>Álbum: <h1>{name}</h1></p>
          <p>Artista: <h2>{desc}</h2></p>
          <p>Preço: R$ {value}</p>
          <div className={style.CardBottom}>
            <img src={image} alt={name} width={150} height={"auto"}/>
            <p>Gênero: {category}</p>
          </div>
      </div>
  )
}