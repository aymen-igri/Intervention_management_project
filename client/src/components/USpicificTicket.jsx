import AssignTicket from "./AssignTicket";
import { useState } from "react";

export default function USpicificTicket({ticket,setDetails}){
    const [assign,setAssign] = useState(false);
    return(
        <>
            <div className="z-25 bg-black opacity-40 w-[200%] h-[200%] fixed bottom-[-10%] left-[-10%]" onClick={()=>{setDetails(false)}}></div>
            <div className="bg-white z-40 text-black fixed top-[8%] left-[24.5%] p-6 flex justify-center flex-col items-start rounded-lg font-medium w-[53%]">
                <h3 className="mb-3">Id: {ticket.id}</h3>
                <div className="flex flex-row justify-center items-center w-full">
                    <label htmlFor="">title</label>
                    <input 
                    type="text" 
                    min="0" 
                    value={ticket.title}
                    className='border border-gray-300 rounded-md p-2 w-full h-10 m-3 placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>
                </div>
                <div className="flex flex-row justify-center items-start w-full">
                    <label className="mt-4">Description</label>
                    <textarea 
                        value={ticket.description}
                        className='border border-gray-300 rounded-md p-2 h-full w-full m-3 placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                        required/>
                </div>
                <div className="flex flex-row justify-center items-start w-full">
                    <label className="mt-4">Categorie</label>
                    <select  placeholder="Role" id="role" className="border w-[95%] border-gray-300 rounded-md p-2 h-10 placeholder-gray-400 text-emerald-950 mr-2 m-3  focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium">
                        <option value="software">Software</option>
                        <option value="hardware">Hardware</option>
                        <option value="network">Network</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <h3 className="mb-3">Status: {ticket.status}</h3>
                <h3 className="mb-3">status: {ticket.status}</h3>
                <h3 className="mb-3">created at: {ticket.created}</h3>
                <h3 className="mb-3">closed at: {ticket.closed}</h3>
                <div className="mt-7 mr-7">
                    <button className="bg-green-600 text-white mr-2 " onClick={()=>{setAssign(true)}}>
                        Save changes
                    </button>
                    <button className="bg-gray-500 text-white mr-2" onClick={()=>{setDetails(false)}}>
                        Close
                    </button>
                </div>
                {assign && <AssignTicket setAssign={setAssign} />}        
            </div>
        </>
    )
}