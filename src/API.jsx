import style from './App.module.css';
import { useState, useEffect } from 'react';
import { api } from "./api/rmApi";
import HeaderButtons from './components/HeaderButtons';
import { APICard } from './components/APICard';
import { APIModal } from './components/APIModal';

export default function API()
{  
    const [data, setData] = useState([]);
    const [page, setPage] = useState("");
    const [name, setName] = useState("");
    const [found, setFound] = useState(true);
    const [Modal, SetModal] = useState(null);
  
    useEffect(() =>
    {
        api.get(`/character/?page=${page}&name=${name}`).then((response) =>{
            if(!response.data.results){
                setFound(false);
            }else{
                setFound(true);
            }
            setData(response.data.results)
            }).catch((error) => {
                if(error.response.status === 404){
                    setFound(false);
                }
                console.error(error)
            })
    }, [page, name])
  
    return (
    <>
        <HeaderButtons/>
        <div className={style.wrapPage}>
            <h1>Exercícios de manutenção</h1>
            <h2>Rick and Morty API</h2>
            <div>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
               <input type="text" placeholder="Nome do Personagem" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            {Modal != null ? 
            <div style={{position: 'fixed', zIndex: '90', top: '50px', left: '50px'}}>
                <APIModal 
                    name={Modal.name} 
                    species={Modal.species} 
                    gender={Modal.gender} 
                    image={Modal.image} 
                    status={Modal.status} 
                    type={Modal.type}
                />
            </div>: <></>}
            {found ? 
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'stretch', justifyContent: 'center', gap: '24px'}}>
            {data.map((item) => { 
                return(
                <div key={item.id}>
                    <APICard name={item.name} species={item.species} gender={item.gender} image={item.image} status={item.status} type={item.type}/>
                    <button 
                        style={Modal == item ? 
                            {backgroundColor: '#f08080', width: '100%', border: '1px solid #00000080'} : 
                            {width: '100%', border: '1px solid #00000080'}}
                        onClick={() => {if(Modal != item){SetModal(item)}else{SetModal(null)}}}
                    >
                        {Modal == item ? "Close" : "Info"}
                    </button>
                </div>
                )
            })}
            </div> : <h1>Esta pagina não contém este personagem</h1> }
        </div>
    </>
    );
}