import { useState } from "react";
import AddComments from "./AddComments";
import api from "../services/api";

export default function SpicificTicket({ticket,setDetails}){

    const [addComments,setAddComments] = useState(false)
    const [status,setStatus] = useState({status:ticket.status});
    const [loading,setLoading] = useState(false);

    async function handleUpdateStatus() {

        try{

            const result = await api.patch(`/ticket/updateTicketStatus/${ticket.id}`,{status:status});
            console.log(result.data);

        }catch(err){
            console.log(`error in the catch part: ${err}`)
        }finally{

            setLoading(false);
            
            setDetails(false);

        }
    }

    const handleSelect = (e) => {

        const newStatus = e.target.value;
        setStatus(newStatus);                 // local UI
        ticket.status = newStatus;            // keep prop in sync (optional)

    };

    return(
        <>
            <div className="z-25 bg-black opacity-40 w-[200%] h-[200%] fixed bottom-[-10%] left-[-10%]" onClick={()=>{setDetails(false)}}></div>
            <div className="bg-white z-40 text-black fixed top-[1%] left-[24%] p-8 flex justify-center flex-col items-start rounded-lg font-medium w-[53%]">
                <h3 className="mb-3">Id: {ticket.id}</h3>
                <h3 className="mb-3">Title: {ticket.title}</h3>
                <div className="flex justify-start">
                   <h3 className="mb-3 ">Description: </h3> <p className="text-start ml-1">{ticket.description}</p>
                </div>
                <h3 className="mb-3">User: {ticket.user_name+" "+ticket.user_familyName}</h3>
                <h3 className="mb-3">Email: {ticket.user_email}</h3>
                <h3 className="mb-3">Phone number: {ticket.user_phone}</h3>
                <h3 className="mb-3">Categorie: {ticket.categorie}</h3>
                <h3 className="mb-3">Priority: {ticket.priority}</h3>
                <div className="flex flex-row justify-center items-start w-full">
                    <label className="mt-4">Status</label>
                    <select  placeholder="Role" id="role" className="border w-[95%] border-gray-300 rounded-md p-2 h-10 placeholder-gray-400 text-emerald-950 mr-2 m-3  focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium" onChange={handleSelect} value={ticket.status}>
                        <option value="open">Open</option>
                        <option value="in progress">In progress</option>
                        <option value="resolved">Resolved</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </div>
                <h3 className="mb-3">created at: {ticket.created_at}</h3>
                <h3 className="mb-3">closed at: {ticket.closed_at}</h3>
                <div className="mt-2 mr-7">
                    <button className="bg-green-600 text-white mr-2" onClick={handleUpdateStatus}>
                        {loading ? "Adding the request" : "Save changes"}
                    </button>
                    <button className="bg-yellow-300 text-black mr-2 " onClick={()=>{setAddComments(true)}}>
                        Comment
                    </button>
                    <button className="bg-gray-500 text-white mr-2" onClick={()=>{setDetails(false)}}>
                        Close
                    </button>
                </div> 
                {addComments && <AddComments setAddComments={setAddComments} tickId={ticket.id}/>}      
            </div>
        </>
    )
}