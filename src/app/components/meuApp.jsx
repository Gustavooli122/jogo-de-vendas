"use client";
import { Check } from "lucide-react";
import { useState} from "react";

export default function meuApp(){
    const [meuDinheiro, setMeuDinheiro]=useState(1000)
     const [comprados, setComprados]= useState([]);
     const [minhaVenda, setMinhaVenda] = useState([]);
     const [menuVenda, setMenuVenda]=useState(false);
     const [valorVenda,setValorVenda]= useState(0);
     const [produtoSelecionado, setProdutoSelecionado] = useState(null);
     const [loading, setLoading] = useState(false)




     function confirmarVenda(){
        let produtoAtual = {...produtoSelecionado, preco:valorVenda}
         setMinhaVenda([...minhaVenda,produtoAtual])
       setLoading(true)
       setTimeout(() => {
        processoVenda(produtoAtual)
        setLoading(false)
         }, 5000) 
         setMenuVenda(false)
         setValorVenda(valorVenda)
         setComprados(prev => prev.filter((p)=> p.id !== produtoAtual.id));
         setProdutoSelecionado(null)
        
        
        }
     
        function processoVenda(){
            
               setMeuDinheiro((prev)=> prev + Number(valorVenda) );
             Number(meuDinheiro).toFixed(2)
            console.log("executada",valorVenda)
        }
     
     
     function vender(produto){
         setMenuVenda(true)
        setProdutoSelecionado(produto)
       
       
     }

     
   function comprar(produto){
   
   if(produto.preco <= meuDinheiro){
    let valor = meuDinheiro - produto.preco;
     setMeuDinheiro(()=>valor);
     setComprados([...comprados, produto]);
   } else{
    alert("Você não tem dinheiro suficiente!")
   }}

    const produtos = [
  { id: 1, nome: "Notebook Gamer", preco: 1850.00 },
  { id: 2, nome: "Teclado Mecânico", preco: 320.50 },
  { id: 3, nome: "Mouse Gamer", preco: 150.00 },
  { id: 4, nome: "Monitor 27 Polegadas", preco: 1299.99 },
  { id: 5, nome: "Headset Gamer", preco: 280.75 },
  { id: 6, nome: "Cadeira Gamer", preco: 950.00 },
  { id: 7, nome: "Mesa para Computador", preco: 720.00 },
  { id: 8, nome: "Smartphone", preco: 1750.00 },
  { id: 9, nome: "Tablet", preco: 980.00 },
  { id: 10, nome: "Smartwatch", preco: 650.00 },
  { id: 11, nome: "Fone Bluetooth", preco: 210.00 },
  { id: 12, nome: "Caixa de Som", preco: 340.00 },
  { id: 13, nome: "Microfone", preco: 410.00 },
  { id: 14, nome: "Webcam HD", preco: 230.00 },
  { id: 15, nome: "Controle de Videogame", preco: 360.00 },
  { id: 16, nome: "Console de Videogame", preco: 1999.99 },
  { id: 17, nome: "HD Externo", preco: 420.00 },
  { id: 18, nome: "SSD 1TB", preco: 550.00 },
  { id: 19, nome: "Pendrive 128GB", preco: 95.00 },
  { id: 20, nome: "Roteador Wi-Fi", preco: 310.00 },
  { id: 21, nome: "Drone", preco: 1450.00 },
  { id: 22, nome: "Câmera Digital", preco: 1600.00 },
  { id: 23, nome: "Tripé para Câmera", preco: 140.00 },
  { id: 24, nome: "Luminária LED", preco: 120.00 },
  { id: 25, nome: "Ventilador", preco: 260.00 },
  { id: 26, nome: "Ar Condicionado Portátil", preco: 1800.00 },
  { id: 27, nome: "Geladeira Compacta", preco: 1350.00 },
  { id: 28, nome: "Micro-ondas", preco: 890.00 },
  { id: 29, nome: "Cafeteira Elétrica", preco: 370.00 },
  { id: 30, nome: "Liquidificador", preco: 190.00 },
  { id: 31, nome: "Bicicleta", preco: 1200.00 },
  { id: 32, nome: "Skate", preco: 220.00 },
  { id: 33, nome: "Patinete Elétrico", preco: 1750.00 },
  { id: 34, nome: "Mochila", preco: 160.00 },
  { id: 35, nome: "Relógio de Pulso", preco: 480.00 },
  { id: 36, nome: "Óculos de Sol", preco: 210.00 },
  { id: 37, nome: "Jaqueta", preco: 390.00 },
  { id: 38, nome: "Tênis Esportivo", preco: 520.00 },
  { id: 39, nome: "TV 50 Polegadas", preco: 1950.00 },
  { id: 40, nome: "Projetor", preco: 1500.00 }
];

    
    return (
       <div className="w-full"> <section className="m-auto flex flex-col items-center shadow-gray-700 shadow-sm rounded-md p-4 gap-3">
             <h1 className="text-2xl">Meu dinheiro:  R$ <span className="font-bold text-green-800">{meuDinheiro}</span>  </h1>
        
        </section>
        <main className="py-10  gap-3 grid grid-cols-3">
            <section className="flex flex-col md:grid grid-cols-2 gap-3"><h1 className="text-xl font-bold col-span-2 text-center">Produtos a venda:</h1>
            {produtos.map((p)=>(
                <div key={p.id} className="flex flex-col items-center gap-2 rounded-sm p-3 shadow-gray-700 shadow-sm">
                   
                    <p className="font-bold text-sm">{p.nome}</p>
                    <p className="text-gray-600">R$ {p.preco}</p>
                    <button onClick={()=> comprar(p)} className="text-blue-600 font-bold">Comprar</button>
                </div>
            ))}
            </section>
          <section className="space-y-3"><h1 className="text-xl  mb-3 font-bold text-center">Meus produtos:</h1>
          {comprados.map((produto)=>(
                <div key={produto.id} className="flex flex-col items-center gap-2 rounded-sm p-3 shadow-gray-700 shadow-sm">
                    <p className="font-bold">{produto.nome}</p>
                    <p className="text-gray-600">R$ {produto.preco}</p>
                    <button onClick={()=> vender(produto)} className="text-green-800">Vender</button>
                </div>
               
            ))}</section>
           {menuVenda && (
            <div className="absolute top-40 left-[30%] md:left-[45%] bg-white p-5 gap-3 rounded-md shadow-sm shadow-gray-600 flex flex-col">
                 <span className="absolute right-4 top-2 font-bold text-xl  cursor-default" onClick={()=> setMenuVenda(!menuVenda)}>x</span>
                <h1 className="text-xl font-bold ">Vender produto</h1>
            <p>Digite valor da venda:</p>
            <input value={valorVenda} onChange={(e)=>setValorVenda(e.target.value)} className="outline-1 outline-gray-600 rounded-sm p-2" type="number" />
            <p className="text-red-500 text-sm mx-3">Você so pode vender esse produto abaixo de valor</p>
            <button onClick={confirmarVenda} className="bg-green-800  text-gray-100 p-2 rounded-md">Vender</button></div>
           )} 
          <section className="space-y-3"><h1 className="text-xl font-bold text-center">Minha venda</h1>
          {minhaVenda.map((p)=>(
                <div key={p.id} className="flex flex-col items-center gap-2 rounded-sm p-3 shadow-gray-700 shadow-sm">
                   
                    <p className="font-bold">{p.nome}</p>
                    <p className="text-gray-600">R$ {p.preco}</p>
                    <button onClick={()=> setProdutoSelecionado(!produtoSelecionado)} className={`${loading?"text-gray-700":"text-blue-600"} flex gap-2`}>{loading?"Processando":"Vendido"} <Check className="w-5"/></button>
                </div>
            ))}
          </section>
        </main></div>
    )};
