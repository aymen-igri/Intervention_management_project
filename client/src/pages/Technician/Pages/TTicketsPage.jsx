import '../../../style/userm.css' 
import TTicketsList from '../../../components/TTicketsList';
import { useState , useEffect } from 'react';
import { useMainUser } from '../../../context/MainUser/useMainUser';
import api from '../../../services/api';

export default function ATicketsPage(){

    const {user} = useMainUser();
    const [searchTicket,setSearchTicket] = useState({
        id:"",
        title:"",
        categorie:"",
        priority:"",
        status:"",
    })
    const [tickets,setTickets] = useState([]);

    useEffect(() => {
        
            api.get(`/ticket/getTicketsByTechId/${user.id}`)
                .then(res => {setTickets((res.data).reverse());console.log(res.data)})
                .catch(console.error);
    },[user.id])
    
    return(
        <>
            <h1 className='absolute top-[3%] left-[7.2%] dropdown text-2xl text-green-600 font-bold z-10 mb-5'>Tickets management</h1>
            <div>
                <div className="absolute right-[-7%] bottom-[75%] flex flex-row justify-around w-[110.8%] dropdown">
                    <div className="relative left-0 flex flex-row justify-between w-3xl">
                        <input 
                            type="text"
                            min="0"
                            placeholder='Id' 
                            onChange={(e)=>{setSearchTicket({...searchTicket,id:e.target.value})}}
                            className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                            required/>
                        <input 
                            type="text" 
                            onChange={(e)=>{setSearchTicket({...searchTicket,title:e.target.value})}}
                            min="0"
                            placeholder='Title' 
                            className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                            required/>
                        <select placeholder="Categorie" id="categorie" className="border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium" onChange={(e)=>{setSearchTicket({...searchTicket,categorie:e.target.value})}}>
                            <option value="">All the categories</option>
                            <option value="hardware">Hardware</option>
                            <option value="software">Software</option>
                            <option value="network">Network</option>
                            <option value="others">Others</option>
                        </select>
                        <select placeholder="Priority" id="Priority" className="border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium" onChange={(e)=>{setSearchTicket({...searchTicket,priority:e.target.value})}}>
                            <option value="">All the tickets</option>
                            <option value="low">Low</option>
                            <option value="madium">madium</option>
                            <option value="hight">hight</option>
                            <option value="critical">critical</option>
                        </select>
                        <select placeholder="Status" id="Status" className="border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium" onChange={(e)=>{setSearchTicket({...searchTicket,status:e.target.value})}}>
                            <option value="">All the status</option>
                            <option value="open">Open</option>
                            <option value="in prograss">In prograss</option>
                            <option value="resolved">Resolved</option>
                            <option value="rejected">Rejected</option>
                            <option value="closed">Closed</option>
                        </select>
                    </div>
                    <div className="relative right-0 flex flex-row items-center justify-between h-10">
                        <button className="text-green-600 h-11 border shadow-md mr-2 bg-white  hover:text-white hover:bg-green-600 button_problem">
                            Export
                        </button>
                    </div>
                    
                </div>
                <div className='relative top-35 right-41.5 w-[146%] h-[600px] dropdown'>
                    <TTicketsList data={tickets} ticketSearched={searchTicket}/>
                </div>
            </div>
        </>
    )
}