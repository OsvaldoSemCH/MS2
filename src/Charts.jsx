import style from './App.module.css'
import { LineChart, Line, CartesianGrid, CartesianAxis, XAxis, YAxis, PieChart, Pie, Legend } from 'recharts';

const data = 
[
    {name: 'A', uv: 400, pv: 2400, amt: 2400},
    {name: 'B', uv: 200, pv: 2100, amt: 2100},
    {name: 'C', uv: 100, pv: 1800, amt: 1800},
    {name: 'D', uv: 800, pv: 1500, amt: 1500},
    {name: 'E', uv: 400, pv: 1200, amt: 1200},
    {name: 'F', uv: 300, pv: 900, amt: 900},
    {name: 'G', uv: 700, pv: 600, amt: 600},
    {name: 'H', uv: 100, pv: 300, amt: 300},
    {name: 'J', uv: 0, pv: 0, amt: 0},
];

export default function Charts()
{
    return(
    <>
        <div className={style.wrapBtns}>
            <a href='/'><button>Produtos</button></a>
            <a href='/'><button>API</button></a>
            <a href='/'><button>Mapa</button></a>
            <a href='/charts'><button>Gráficos</button></a>
        </div>
        <div className={style.wrapPage}>
            <h1>Exercícios de manutenção</h1>
            <h2>Gráficos</h2>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <LineChart width={400} height={400} data={data}>
                    <CartesianGrid strokeDasharray={'3'} fill='#808080' fillOpacity={'0.3'}/>
                    <XAxis/>
                    <YAxis/>
                    <Line dataKey="uv" stroke="#ff4040"/>
                </LineChart>
                <PieChart width={400} height={400}>
                    <Pie data={data} dataKey="uv" fill='#40ff40' fillOpacity={'0.5'} label/>
                </PieChart>
            </div>
        </div>
    </>
    );
}