import style from './App.module.css';
import produtos from './constants/produtos.json';
import HeaderButtons from './components/HeaderButtons'
import { Card } from './components/Card'

export default function Prod()
{
    return (
    <>
        <HeaderButtons/>
        <div className={style.wrapPage}>
            <h1>Exercícios de manutenção</h1>
            <h2>Showroom de produtos</h2>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'stretch', justifyContent: 'center', gap: '24px'}}>
            {produtos.map((item) => {
                return(
                <Card
                    name={item.name}
                    desc={item.desc}
                    value={item.value}
                    image={item.image} 
                    key={item.id} 
                    status={item.status} 
                    category={item.category}
                />
                )
            })}
            </div>
        </div>
    </>
    );
}