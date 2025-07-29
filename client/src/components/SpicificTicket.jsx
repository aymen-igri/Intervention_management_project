import AssignTicket from "./AssignTicket";
import { useState } from "react";
import SeeComments from "./SeeComments";
import { format} from 'date-fns'
import api from "../services/api";
import {Download} from 'lucide-react'
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import OCPLogo from '../assets/images-removebg-preview.png'

export default function SpicificTicket({ticket,setDetails}){

    const [assign,setAssign] = useState(false);
    const [seeComments,setSeeComments] = useState(false);
    const [selectedPriority,setSelectedPriority] = useState({
        priority: ticket?.priority ?? ""
    });
    const [loading,setLoading] = useState(false)

    async function handleUpdatePriority(){

        setLoading(true);

        try{

            const response = await api.patch(`/ticket/updatePriority/${ticket.id}`,selectedPriority);
            console.log(response)

        }catch(err){

            console.log(`error at the update: ${err}`);

        }finally{

            setLoading(false);
            window.location.reload();
            setDetails(false);

        }

    } 

    async function handleCloseTicket(){

        setLoading(true);

        try{

            const response = await api.patch(`/ticket/closeTicket/${ticket.id}`);
            console.log(response);

        }catch(err){
            console.log(`error at the close ticket: ${err}`);
        }finally{

            setLoading(false);
            window.location.reload();
            setDetails(false);

        }
    }

    const exportTicketToPDF = () => {
        const doc = new jsPDF();
        
        const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        try {
            doc.addImage(OCPLogo, 'PNG', 15, 10, 40, 12); // x, y, width, height
        } catch (error) {
            console.log('Logo could not be loaded:',error);
        }

        doc.setFontSize(22);
        doc.setTextColor(0, 128, 64);
        doc.text("Ticket Report", 105, 30, null, null, 'center');

        const ticketData = [
            ["Id", ticket.id || 'N/A'],
            ["Title", ticket.title || 'N/A'],
            ["Description", ticket.description || 'N/A'],
            ["User", `${ticket.user_name || ''} ${ticket.user_familyName || ''}`.trim() || 'N/A'],
            ["Technician", (ticket.tech_name && ticket.tech_familyName) ? 
                `${ticket.tech_name} ${ticket.tech_familyName}` : 'No technician assigned'],
            ["Category", ticket.categorie || 'N/A'],
            ["Priority", ticket.priority || 'N/A'],
            ["Status", ticket.status || 'N/A'],
            ["Created At", ticket.created_at ? format(new Date(ticket.created_at), 'dd-MM-yyyy') : 'N/A'],
            ["Closed At", ticket.closed_at ? format(new Date(ticket.closed_at), 'dd-MM-yyyy') : 'Not yet']
        ];

        autoTable(doc, {
            body: ticketData,
            startY: 40,
            theme: 'grid',
            styles: {
                fontSize: 11,
                cellPadding: 4
            },
            headStyles: {
                fillColor: [0, 128, 64],
                textColor: [255, 255, 255],
                fontStyle: 'bold'
            },
            columnStyles: {
                0: { cellWidth: 40, fontStyle: 'bold' }, // First column (labels)
                1: { cellWidth: 'auto' } // Second column (values)
            }
        });

        const finalY = doc.lastAutoTable.finalY || 40;
        doc.setFontSize(10);
        doc.setTextColor(150, 150, 150);
        doc.text(`Exported on: ${currentDate}`, 195, finalY + 15, null, null, 'right');

        // Save the PDF
        doc.save(`ticket-${ticket.id}-${new Date().toISOString().split('T')[0]}.pdf`);
    };

    const closeDate = ticket.closed_at ? format(new Date(ticket.closed_at), 'dd-MM-yyyy') : "not yet"
    const techFullName = ticket.tech_name && ticket.tech_familyName ? ticket.tech_name + " " + ticket.tech_familyName : "no technician assigned";
    const ClosedButtonStyle = ( ticket.status === "resolved" ) ? "bg-red-600 text-white mr-2 rounded-lg hover:bg-red-400 transition-colors duration-100 ease-in-out" : "bg-red-300 text-gray-200 mr-2 rounded-lg";
    const AssignDisable = !!(ticket.tech_name && ticket.tech_familyName) && ticket.status !== "rejected" 
    const AssignButtonStyle = !AssignDisable ?"bg-green-600 text-white mr-2 rounded-lg hover:bg-green-400 transition-colors duration-100 ease-in-out" : "bg-green-300 text-gray-200 mr-2 rounded-lg"  
    const ClosedDesable =  !(ticket.status === "resolved")
    
    return(
        <>
            <div className="z-25 bg-black opacity-40 w-[200%] h-[200%] fixed bottom-[-10%] left-[-10%]" onClick={()=>{setDetails(false)}}></div>
            <div className="bg-white z-40 text-black fixed top-[8%] left-[24%] p-8 flex justify-center flex-col items-start rounded-lg font-medium w-[53%]">
                <div className="flex flex-row items-center justify-between w-full ">
                    <h3 className="mb-3">Id: {ticket.id}</h3>
                    <button onClick={exportTicketToPDF}>
                        <Download color="green" />
                    </button>   
                </div>
                <h3 className="mb-3">Title: {ticket.title}</h3>
                <div className="flex justify-start">
                   <h3 className="mb-3">Description: </h3> <p className="text-start ml-1 mb-2">{ticket.description}</p>
                </div>
                <h3 className="mb-3">User: {ticket.user_name + " " + ticket.user_familyName}</h3>
                <h3 className="mb-3">Technician: {techFullName}</h3>
                <h3 className="mb-3">Categorie: {ticket.categorie}</h3>
                <div className="flex flex-row justify-center items-start w-full">
                    <label className="mt-4">Priority</label>
                    <select  
                        placeholder="Role" id="role" 
                        className="border w-[95%] border-gray-300 rounded-md p-2 h-10 placeholder-gray-400 text-emerald-950 mr-2 m-3  focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium"
                        onChange={(e)=>{setSelectedPriority({...selectedPriority,priority:e.target.value})}}
                        >
                        <option value="low">Low</option>
                        <option value="madium">Madium</option>
                        <option value="hight">Hight</option>
                        <option value="critical">Critical</option>
                    </select>
                </div>
                <h3 className="mb-3">Status: {ticket.status}</h3>
                <h3 className="mb-3">created at: {format(new Date(ticket.created_at), 'dd-MM-yyyy')}</h3>
                <h3 className="mb-3">closed at: {closeDate}</h3>
                <div className="mt-7 mr-7">
                    <button className="bg-green-600 text-white mr-2 rounded-lg hover:bg-green-400 transition-colors duration-100 ease-in-out" onClick={handleUpdatePriority}>
                        {loading ? "Adding the request..." : "Save changes"}
                    </button>
                    <button className={AssignButtonStyle} onClick={()=>{setAssign(true)}} disabled={AssignDisable}>
                        Assign
                    </button>
                    <button className="bg-yellow-300 text-black mr-2 rounded-lg hover:bg-yellow-400 transition-colors duration-100 ease-in-out" onClick={()=>{setSeeComments(true)}}>
                        Comments
                    </button>
                    <button className={ClosedButtonStyle} disabled={ClosedDesable} onClick={handleCloseTicket}>
                        {loading ? "Closing the ticket..." : "Close ticket"}
                    </button>
                    <button className="bg-gray-600 text-white mr-2 rounded-lg hover:bg-gray-400 transition-colors duration-100 ease-in-out" onClick={()=>{setDetails(false)}} >
                        Close
                    </button>
                </div>
                {assign && <AssignTicket ticket={ticket} setAssign={setAssign} />}  
                {seeComments && <SeeComments ticket={ticket} setSeeComments={setSeeComments} />}      
            </div>
        </>
    )
}