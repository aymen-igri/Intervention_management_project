import AssignTicket from "./AssignTicket";
import { useState } from "react";
import SeeComments from "./SeeComments";
import { format } from 'date-fns'

export default function SpicificTicket({ticket,setDetails}){
    const [assign,setAssign] = useState(false);
    const [seeComments,setSeeComments] = useState(false);
    const closeDate = ticket.closed_at ? format(new Date(ticket.closed_at), 'dd-MM-yyyy') : "not yet"
    const techFullName = ticket.tech_name && ticket.tech_familyName ? ticket.tech_name + " " + ticket.tech_familyName : "no technician assigned";
    const ClosedButtonStyle = ( ticket.status === "resolved" ) ? "bg-red-600 text-white mr-2" : "bg-red-300 text-gray-200 mr-2";
    const AssignButtonStyle = (ticket.tech_name && ticket.tech_familyName) || ticket.status !== "rejected" ? "bg-green-300 text-gray-200 mr-2" : "bg-green-600 text-white mr-2"
    const ClosedDesable =  !(ticket.status === "resolved")
    const AssignDisable = !!((ticket.tech_name && !!ticket.tech_familyName) || ticket.status !== "rejected" )
    return(
        <>
            <div className="z-25 bg-black opacity-40 w-[200%] h-[200%] fixed bottom-[-10%] left-[-10%]" onClick={()=>{setDetails(false)}}></div>
            <div className="bg-white z-40 text-black fixed top-[8%] left-[24%] p-8 flex justify-center flex-col items-start rounded-lg font-medium w-[53%]">
                <h3 className="mb-3">Id: {ticket.id}</h3>
                <h3 className="mb-3">Title: {ticket.title}</h3>
                <div className="flex justify-start">
                   <h3 className="mb-3">Description: </h3> <p>{ticket.description}</p>
                </div>
                <h3 className="mb-3">User: {ticket.user_name + " " + ticket.user_familyName}</h3>
                <h3 className="mb-3">Technician: {techFullName}</h3>
                <h3 className="mb-3">Categorie: {ticket.categorie}</h3>
                <div className="flex flex-row justify-center items-start w-full">
                    <label className="mt-4">Priority</label>
                    <select  placeholder="Role" id="role" className="border w-[95%] border-gray-300 rounded-md p-2 h-10 placeholder-gray-400 text-emerald-950 mr-2 m-3  focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium">
                        <option value="Low">Low</option>
                        <option value="Madium">Madium</option>
                        <option value="Hight">Hight</option>
                        <option value="Critical">Critical</option>
                    </select>
                </div>
                <h3 className="mb-3">Status: {ticket.status}</h3>
                <h3 className="mb-3">created at: {format(new Date(ticket.created_at), 'dd-MM-yyyy')}</h3>
                <h3 className="mb-3">closed at: {closeDate}</h3>
                <div className="mt-7 mr-7">
                    <button className={AssignButtonStyle} onClick={()=>{setAssign(true)}} disabled={AssignDisable}>
                        Assign
                    </button>
                    <button className="bg-yellow-300 text-black mr-2 " onClick={()=>{setSeeComments(true)}}>
                        Comments
                    </button>
                    <button className={ClosedButtonStyle} disabled={ClosedDesable}>
                        Close ticket
                    </button>
                    <button className="bg-gray-500 text-white mr-2" onClick={()=>{setDetails(false)}} >
                        Close
                    </button>
                </div>
                {assign && <AssignTicket setAssign={setAssign} />}  
                {seeComments && <SeeComments setSeeComments={setSeeComments} />}      
            </div>
        </>
    )
}