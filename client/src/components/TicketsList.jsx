import { useState } from "react"
import SpicificTicket from "./SpicificTicket";

export default function TicketsList({data,ticketSearched}){

    const [ticket,setticket] = useState(null);
    const [details,setDetails] = useState(false);

    const users = data.map((d) => {
        const statusStyle = () => {
            if (d.status ==="open") return "text-cyan-700 rounded-full px-3 py-0.5 bg-cyan-200 text-sm font-medium"
            else if(d.status === "in progress") return "text-indigo-700 rounded-full px-3 py-0.5 bg-indigo-200 text-sm font-medium"
            else if (d.status === "resolved") return "text-green-700 rounded-full px-3 py-0.5 bg-green-200 text-sm font-medium"
            else if (d.status === "rejected") return "text-red-700 rounded-full px-3 py-0.5 bg-red-200 text-sm font-medium"
            else return "text-gray-700 rounded-full px-3 py-0.5 bg-gray-200 text-sm font-medium"
        }
        
        const categorieStyle = () => {
        if (d.categorie === "hardware") return "text-amber-700 rounded-full px-3 py-0.5 bg-amber-200 text-sm font-medium"
        else if (d.categorie === "software") return "text-blue-700 rounded-full px-3 py-0.5 bg-blue-200 text-sm font-medium"
        else if (d.categorie === "network") return "text-violet-700 rounded-full px-3 py-1 bg-violet-200 text-sm font-medium"
        else return "text-gray-700 rounded-full px-3 py-1 bg-gray-100 text-sm font-medium"
        }

        const priorityStyle = () =>{
            if (d.priority === "low") return "text-gray-700 rounded-full px-3 py-0.5 bg-gray-200 text-sm font-medium"
            else if (d.priority === "madium") return "text-blue-700 rounded-full px-3 py-0.5 bg-blue-200 text-sm font-medium"
            else if (d.priority === "hight") return "text-amber-700 rounded-full px-3 py-1 bg-amber-200 text-sm font-medium"
            else return "text-red-700 rounded-full px-3 py-1 bg-red-100 text-sm font-medium"
        }

        const verificationStatement = (ticketSearched.id === "" || Number(ticketSearched.id) === d.id)&&
                                      (ticketSearched.title === "" || d.title.toLowerCase().startsWith(ticketSearched.title))&&
                                      (ticketSearched.categorie === "" || ticketSearched.categorie === d.categorie)&&
                                      (ticketSearched.priority === "" || ticketSearched.priority === d.priority)&&
                                      (ticketSearched.status === "" || ticketSearched.status === d.status); 
        if(verificationStatement){
            return (
            <div
              className="text-gray-800 p-4 flex items-center justify-between w-full border-b border-gray-100 hover:bg-gray-50 transition-all duration-300 ease-in-out" key={d.id} onClick={()=>{setticket(d);setDetails(true);}}>
              <h2 className="w-16 text-center font-medium">{d.id}</h2>
              <h2 className="w-48 text-center font-medium">{d.title}</h2>
              <h2 className="w-16 flex justify-center">
                <span className={categorieStyle()}>{d.categorie}</span>
              </h2>
              <h2 className="w-16 flex justify-center">
                <span className={priorityStyle()}>{d.priority}</span>
              </h2>
              <h2 className="w-16 flex justify-center">
                <span className={statusStyle()}>{d.status}</span>
              </h2>
              <h2 className="w-40 text-center font-medium">{d.user_name + " " + d.user_familyName}</h2>
              <h2 className="w-40 text-center font-medium">{d.tech_name + " " + d.tech_familyName}</h2>
            </div>
           )
        }
        
  })
    return(
       <div className="bg-white shadow-lg rounded-lg mx-auto w-[97.4%]">
            <div className="text-gray-700 font-semibold flex items-center justify-between w-full p-4 bg-white rounded-t-lg border-b border-gray-200">
                <h2 className="w-16 text-center">ID</h2>
                <h2 className="w-48 text-center">Title</h2>
                <h2 className="w-16 text-center">Categorie</h2>
                <h2 className="w-16 text-center">Priority</h2>
                <h2 className="w-16 text-center">Status</h2>
                <h2 className="w-40 text-center">User's name</h2>
                <h2 className="w-40 text-center">Tech'S name</h2>
            </div>
            <div className="max-h-96 overflow-y-auto scroll-bar-hide">{users}</div>
            {details && <SpicificTicket ticket={ticket} setDetails={setDetails} />}
        </div>
            
    )
}