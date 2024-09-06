import style from './APIModal.module.css'
import Draggable from 'react-draggable'
import { useState } from 'react'

export const APIModal = ({name, species, type, gender, image, status}) =>
{
    return(
    <>
        <Draggable>
        <div className={style.Card}>
            <div className={style.Status} style=
            {
                status === 'Alive' ? {backgroundColor: '#00c000'} : 
                status === 'Dead' ? {backgroundColor: '#c00000'} :
                {backgroundColor: '#c0c000'}
            }>
            </div>
            <h2>{name}</h2>
            <h3>{species}</h3>
            <p>Gender: {gender}</p>
            {type ? <p>{type}</p> : <br></br>}
            
            <img src={image} alt={name} width={150} height={"auto"}/>
        </div>
        </Draggable>
    </>
    )
}