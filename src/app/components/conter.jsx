"use client";

import { useState, useEffect } from "react";

export default function Contador() {

const [dinheiro,setDinheiro] = useState(1000);
const [inventario,setInventario] = useState([]);
const [passiveIncomes,setPassiveIncomes] = useState([]);

const [produtoSelecionado,setProdutoSelecionado] = useState(null);
const [valorVenda,setValorVenda] = useState(0);
const [quantidadeVenda,setQuantidadeVenda] = useState(1);
const [menuVenda,setMenuVenda] = useState(false);
const [nivel,setNivel] = useState(1);
const [evento,setEvento] = useState("");

const [multiplicadorMercado,setMultiplicadorMercado] = useState(1);


// =================
// PRODUTOS
// =================


const produtos = [

{ id:1,nome:"Mochila",preco:160 },
{ id:2,nome:"Óculos de Sol",preco:210 },
{ id:3,nome:"Tênis",preco:520 },
{ id:4,nome:"Skate",preco:220 },
{ id:5,nome:"Boné",preco:120 },
{ id:6,nome:"Fone de Ouvido",preco:180 },
{ id:7,nome:"Relógio",preco:350 },
{ id:8,nome:"Mouse Gamer",preco:260 },
{ id:9,nome:"Teclado Mecânico",preco:420 },
{ id:10,nome:"Caixa de Som",preco:300 },

{ id:11,nome:"Cadeira Gamer",preco:900 },
{ id:12,nome:"Monitor",preco:800 },
{ id:13,nome:"Tablet",preco:1300 },
{ id:14,nome:"Smartphone",preco:1750 },
{ id:15,nome:"Notebook",preco:1850 },
{ id:16,nome:"Drone",preco:1450 },
{ id:17,nome:"Câmera",preco:1600 },
{ id:18,nome:"Impressora",preco:950 },
{ id:19,nome:"Console",preco:2200 },
{ id:20,nome:"TV 50",preco:2500 },

{ id:21,nome:"TV 65",preco:4200 },
{ id:22,nome:"PC Gamer",preco:4500 },
{ id:23,nome:"Servidor",preco:8000 },
{ id:24,nome:"Impressora 3D",preco:3500 },
{ id:25,nome:"Moto",preco:10000 },
{ id:26,nome:"Moto Esportiva",preco:25000 },
{ id:27,nome:"Carro Popular",preco:20000 },
{ id:28,nome:"Carro Sedan",preco:45000 },
{ id:29,nome:"Carro SUV",preco:85000 },
{ id:30,nome:"Carro Esportivo",preco:120000 },

{ id:31,nome:"Van",preco:90000 },
{ id:32,nome:"Caminhonete",preco:150000 },
{ id:33,nome:"Caminhão",preco:250000 },
{ id:34,nome:"Ônibus",preco:400000 },
{ id:35,nome:"Jet Ski",preco:60000 },
{ id:36,nome:"Lancha",preco:200000 },
{ id:37,nome:"Iate",preco:5000000 },
{ id:38,nome:"Helicóptero",preco:8000000 },
{ id:39,nome:"Avião",preco:500000 },
{ id:40,nome:"Jato Particular",preco:20000000 },

{ id:41,nome:"Terreno",preco:40000 },
{ id:42,nome:"Kitnet",preco:80000 },
{ id:43,nome:"Apartamento",preco:120000 },
{ id:44,nome:"Casa",preco:50000 },
{ id:45,nome:"Casa de Luxo",preco:300000 },
{ id:46,nome:"Mansão",preco:2000000 },
{ id:47,nome:"Prédio Pequeno",preco:900000 },
{ id:48,nome:"Prédio Comercial",preco:3000000 },
{ id:49,nome:"Hotel",preco:6000000 },
{ id:50,nome:"Resort",preco:12000000 },

{ id:51,nome:"Sítio",preco:120000 },
{ id:52,nome:"Fazenda",preco:150000 },
{ id:53,nome:"Fazenda Grande",preco:900000 },
{ id:54,nome:"Fazenda Gigante",preco:5000000 },
{ id:55,nome:"Plantação de Soja",preco:3000000 },
{ id:56,nome:"Plantação de Café",preco:2500000 },
{ id:57,nome:"Plantação de Milho",preco:1800000 },
{ id:58,nome:"Criação de Gado",preco:2200000 },
{ id:59,nome:"Criação de Cavalos",preco:1500000 },
{ id:60,nome:"Vinícola",preco:7000000 },

{ id:61,nome:"Loja",preco:75000 },
{ id:62,nome:"Restaurante",preco:200000 },
{ id:63,nome:"Bar",preco:120000 },
{ id:64,nome:"Padaria",preco:180000 },
{ id:65,nome:"Cafeteria",preco:150000 },
{ id:66,nome:"Supermercado",preco:700000 },
{ id:67,nome:"Shopping",preco:3000000 },
{ id:68,nome:"Fábrica Pequena",preco:1200000 },
{ id:69,nome:"Fábrica Média",preco:3500000 },
{ id:70,nome:"Fábrica Grande",preco:8000000 },

{ id:71,nome:"Empresa de Tecnologia",preco:15000000 },
{ id:72,nome:"Empresa de Logística",preco:10000000 },
{ id:73,nome:"Empresa de Energia",preco:20000000 },
{ id:74,nome:"Empresa de Construção",preco:12000000 },
{ id:75,nome:"Empresa de Mineração",preco:30000000 },
{ id:76,nome:"Banco",preco:50000000 },
{ id:77,nome:"Rede de Hotéis",preco:40000000 },
{ id:78,nome:"Rede de Supermercados",preco:35000000 },
{ id:79,nome:"Companhia Aérea",preco:80000000 },
{ id:80,nome:"Estúdio de Cinema",preco:25000000 },

{ id:81,nome:"Ilha Privada",preco:100000000 },
{ id:82,nome:"Base Militar",preco:150000000 },
{ id:83,nome:"Porto Comercial",preco:120000000 },
{ id:84,nome:"Plataforma de Petróleo",preco:300000000 },
{ id:85,nome:"Usina Hidrelétrica",preco:500000000 },
{ id:86,nome:"Usina Nuclear",preco:800000000 },
{ id:87,nome:"Empresa Espacial",preco:1000000000 },
{ id:88,nome:"Satélite",preco:600000000 },
{ id:89,nome:"Foguete Espacial",preco:900000000 },
{ id:90,nome:"Estação Espacial",preco:2000000000 },

{ id:91,nome:"Cidade Privada",preco:3000000000 },
{ id:92,nome:"País Pequeno",preco:5000000000 },
{ id:93,nome:"Império Empresarial",preco:8000000000 },
{ id:94,nome:"Mega Corporação",preco:12000000000 },
{ id:95,nome:"Continente Artificial",preco:20000000000 },
{ id:96,nome:"Colônia Lunar",preco:50000000000 },
{ id:97,nome:"Colônia em Marte",preco:100000000000 },
{ id:98,nome:"Mega Estação Espacial",preco:200000000000 },
{ id:99,nome:"Planeta Terraformado",preco:500000000000 },
{ id:100,nome:"Sistema Solar Privado",preco:1000000000000 }

];

// =================
// RENDIMENTOS
// =================

const rendimentos = [

{ id:1,nome:"R$50 / 5s",preco:500,ganho:50 },
{ id:2,nome:"R$100 / 5s",preco:1000,ganho:100 },
{ id:3,nome:"R$200 / 5s",preco:5000,ganho:200 },
{ id:4,nome:"R$500 / 5s",preco:7000,ganho:500 },
{ id:5,nome:"R$1000 / 5s",preco:10000,ganho:1000 },
{ id:6,nome:"R$4000 / 5s",preco:90000,ganho:4000 },
{ id:7,nome:"R$10000 / 5s",preco:200000,ganho:10000 },
{ id:8,nome:"R$20000/ 5s",preco:600000,ganho:20000 },
{ id:9,nome:"R$50000/ 5s",preco:1000000,ganho:50000 },
{ id:10,nome:"R$90000 / 5s",preco:5000000,ganho:90000 },
{ id:11,nome:"R$200000 / 5s",preco:10000000,ganho:200000 },
{ id:12,nome:"R$500000 / 5s",preco:100000000,ganho:500000 },
{ id:13,nome:"R$1000000 / 5s",preco:1000000000,ganho:1000000 },
{ id:14,nome:"R$10000000 / 5s",preco:10000000000,ganho:10000000 },

];

//NIVEL

useEffect(()=>{

const novoNivel = Math.floor(dinheiro / 10000) + 1;

setNivel(novoNivel);

},[dinheiro]);

// =================
// COMPRAR PRODUTO
// =================

function comprar(produto){

if(produto.preco > dinheiro){

alert("Dinheiro insuficiente");
return;

}

setDinheiro(prev => prev - produto.preco);

setInventario(prev => {

const existe = prev.find(p => p.id === produto.id);

if(existe){

return prev.map(p =>
p.id === produto.id
? {...p,quantidade:p.quantidade+1}
: p
);

}

return [...prev,{...produto,quantidade:1}];

});

}


// =================
// VENDER
// =================

function vender(produto){

setProdutoSelecionado(produto);
setValorVenda(produto.preco);
setQuantidadeVenda(1);
setMenuVenda(true);

}


// =================
// CONFIRMAR VENDA
// =================

function confirmarVenda(){

if(!produtoSelecionado) return;

const precoOriginal = produtoSelecionado.preco;

const lucroMaximo = precoOriginal * 0.10;

const precoMaximo = precoOriginal + lucroMaximo;

if(valorVenda > precoMaximo){

alert(`Máximo permitido: ${precoMaximo.toFixed(2)}`);
return;

}

if(quantidadeVenda > produtoSelecionado.quantidade){

alert("Quantidade inválida");
return;

}

const totalVenda = valorVenda * quantidadeVenda;

setDinheiro(prev => prev + totalVenda);

setInventario(prev =>

prev
.map(p =>

p.id === produtoSelecionado.id
? {...p,quantidade:p.quantidade - quantidadeVenda}
: p

)
.filter(p => p.quantidade > 0)

);

setMenuVenda(false);
setProdutoSelecionado(null);

}

function venderTudo(){

const total = inventario.reduce((acc,p)=>{

const preco = p.preco * 1.05;

return acc + preco * p.quantidade

},0);

setDinheiro(prev=>prev+total);

setInventario([]);

}

// =================
// COMPRAR RENDA
// =================

function comprarRendimento(r){

if(r.preco > dinheiro){

alert("Dinheiro insuficiente");
return;

}

setDinheiro(prev => prev - r.preco);

setPassiveIncomes(prev => [...prev,r]);

}


// =================
// RENDA PASSIVA
// =================

useEffect(()=>{

const intervalo = setInterval(()=>{

const total = passiveIncomes.reduce((acc,p)=>acc+p.ganho,0);

if(total>0){

setDinheiro(prev=>prev+total);

}

},5000);

return ()=> clearInterval(intervalo);

},[passiveIncomes]);


// =================
// MERCADO DINÂMICO
// =================

useEffect(()=>{

const intervalo = setInterval(()=>{

const variacao = (Math.random()*0.4)-0.2;

setMultiplicadorMercado(1+variacao);

},15000);

return ()=> clearInterval(intervalo);

},[]);

useEffect(()=>{

const eventos = [
{nome:"Boom econômico 📈",mult:1.5},
{nome:"Crise econômica 📉",mult:0.5},
{nome:"Promoção global 🏷",mult:0.7},
{nome:"Alta demanda 🔥",mult:1.8}
]

const intervalo = setInterval(()=>{

const evento = eventos[Math.floor(Math.random()*eventos.length)];

setEvento(evento.nome);

setMultiplicadorMercado(evento.mult);

setTimeout(()=>{
setEvento("");
setMultiplicadorMercado(1);
},10000);

},60000);

return ()=> clearInterval(intervalo)

},[]);

// =================
// SALVAR
// =================

useEffect(()=>{

localStorage.setItem("dinheiro",JSON.stringify(dinheiro));
localStorage.setItem("inventario",JSON.stringify(inventario));
localStorage.setItem("rendas",JSON.stringify(passiveIncomes));

},[dinheiro,inventario,passiveIncomes]);


// =================
// CARREGAR
// =================

useEffect(()=>{

const d = localStorage.getItem("dinheiro");
const i = localStorage.getItem("inventario");
const r = localStorage.getItem("rendas");

if(d) setDinheiro(JSON.parse(d));
if(i) setInventario(JSON.parse(i));
if(r) setPassiveIncomes(JSON.parse(r));

},[]);


// =================
// UI
// =================

return(

<div className="p-6 space-y-6 w-screen">
<div className="fixed bg-white w-full top-0 left-0 right-0 flex flex-col gap-5 items-center rounded-lg p-5 shadow-sm shadow-gray-500"><h1 className="text-2xl font-bold">

Dinheiro: R$ {dinheiro.toFixed(2)}

</h1>
<p>Nível: {nivel}</p>
{evento && <p className="text-red-500">{evento}</p>}
<h2 className="font-bold">Produtos</h2></div>

<div className="mt-[30%] space-y-6">
{produtos.map(p=>(

<div key={p.id} className="flex  justify-between border p-2">

<span>

{p.nome} - R$ {(p.preco*multiplicadorMercado).toFixed(2)}

</span>

<button
onClick={()=>comprar(p)}
className="bg-blue-500 text-white px-2"
>

Comprar

</button>

</div>

))}
</div>

<h2 className="font-bold">Inventário</h2>

{inventario.map(p=>(

<div key={p.id} className="flex justify-between border p-2">

<span>

{p.nome} x{p.quantidade}

</span>

<button
onClick={()=>vender(p)}
className="bg-green-600 text-white px-2"
>

Vender

</button>

</div>

))}
<button
onClick={venderTudo}
className="bg-red-500 text-white px-2"
>

Vender tudo

</button>

<h2 className="font-bold">Renda passiva</h2>

{rendimentos.map(r=>(

<div key={r.id} className="flex justify-between border p-2">

<span>

{r.nome} - R$ {r.preco}

</span>

<button
onClick={()=>comprarRendimento(r)}
className="bg-purple-600 text-white px-2"
>

Comprar

</button>

</div>

))}


{menuVenda && produtoSelecionado && (

<div className="fixed inset-0 bg-black/40 flex items-center justify-center">

<div className="bg-white p-4 w-72 space-y-2">

<h2 className="font-bold">

Vender {produtoSelecionado.nome}

</h2>

<input
type="number"
value={valorVenda}
onChange={(e)=>setValorVenda(Number(e.target.value))}
className="border w-full p-1"
/>

<input
type="number"
value={quantidadeVenda}
onChange={(e)=>setQuantidadeVenda(Number(e.target.value))}
className="border w-full p-1"
/>

<button
onClick={confirmarVenda}
className="bg-green-600 text-white w-full p-1"
>

Confirmar

</button>

<button
onClick={()=>setMenuVenda(false)}
className="bg-gray-400 text-white w-full p-1"
>

Cancelar

</button>

</div>

</div>

)}

</div>

);

}