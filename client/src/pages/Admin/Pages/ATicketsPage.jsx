import '../../../style/userm.css' 
import TicketsList from '../../../components/TicketsList';
import { useState } from 'react';

export default function ATicketsPage(){

    const [searchTicket,setSearchTicket] = useState({
        id:"",
        title:"",
        categorie:"",
        priority:"",
        status:"",
    })

    const tickets = [
        {id:"1" , title:"title1", categorie:"hardware",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds  ", priority:"low", status:"resolved", user:"aymen", tech:"ahmed"},
        {id:"2" , title:"title2", categorie:"hardware",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds" , priority:"low", status:"rejected", user:"aymen", tech:"ahmed"},
        {id:"3" , title:"title3", categorie:"software",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds" , priority:"madium", status:"closed", user:"aymen", tech:"ahmed"},
        {id:"4" , title:"title4", categorie:"hardware",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds" , priority:"low", status:"in progress", user:"aymen", tech:"ahmed"},
        {id:"5" , title:"title5", categorie:"hardware",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds", priority:"critical", status:"closed", user:"aymen", tech:"ahmed"},
        {id:"6" , title:"title6", categorie:"others",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds", priority:"low", status:"in progress", user:"aymen", tech:"ahmed"},
        {id:"7" , title:"title7", categorie:"hardware",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds", priority:"hight", status:"resolved", user:"aymen", tech:"ahmed"},
        {id:"8" , title:"title8", categorie:"hardware",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds", priority:"low", status:"resolved", user:"aymen", tech:"ahmed"},
        {id:"9" , title:"title9", categorie:"others",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds", priority:"low", status:"resolved", user:"aymen", tech:"ahmed"},
        {id:"10" , title:"title0", categorie:"hardware",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds", priority:"critical", status:"resolved", user:"aymen", tech:"ahmed"},
        {id:"11" , title:"title1", categorie:"software",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds", priority:"low", status:"closed", user:"aymen", tech:"ahmed"},
        {id:"12" , title:"title2", categorie:"hardware",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds", priority:"Mdium", status:"in progress", user:"aymen", tech:"ahmed"},

    ]
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
                    <TicketsList data={tickets} ticketSearched={searchTicket}/>
                </div>
            </div>
        </>
    )
}