import { useState } from "react";
import AddComments from "./AddComments";
import api from "../services/api"
import { format } from "date-fns";
import {Download} from 'lucide-react'
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import OCPLogo from '../assets/images-removebg-preview.png'

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
            doc.setTextColor(41, 128, 185);
            doc.text("Ticket Report", 105, 30, null, null, 'center');
    
            const ticketData = [
                ["Id", ticket.id || 'N/A'],
                ["Title", ticket.title || 'N/A'],
                ["Description", ticket.description || 'N/A'],
                ["User", `${ticket.user_name || ''} ${ticket.user_familyName || ''}`.trim() || 'N/A'],
                ["Email",  ticket.user_email || 'N/A'],
                ["Phone number",  ticket.user_phone || 'N/A'],
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
                    fillColor: [16, 185, 129],
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
            doc.save(`Ticket-${ticket.id}-${new Date().toISOString().split('T')[0]}.pdf`);
        };

    return(
        <>
            <div className="z-25 bg-black opacity-40 w-[200%] h-[200%] fixed bottom-[-10%] left-[-10%]" onClick={()=>{setDetails(false)}}></div>
            <div className="bg-white z-40 text-black fixed top-[5%] left-[24%] p-8 flex justify-center flex-col items-start rounded-lg font-medium w-[53%]">
                <div className="flex flex-row items-center justify-between w-full ">
                    <h3 className="mb-3">Id: {ticket.id}</h3>
                    <button onClick={exportTicketToPDF}>
                        <Download color="green" />
                    </button>   
                </div>
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
                <h3 className="mb-3">created at: {format(new Date(ticket.created_at), 'dd-MM-yyyy')}</h3>
                <h3 className="mb-3">closed at: {format(new Date(ticket.closed_at), 'dd-MM-yyyy')}</h3>
                <div className="mt-2 mr-7">
                    <button className="bg-green-600 text-white mr-2 rounded-lg hover:bg-green-400 transition-colors duration-100 ease-in-out" onClick={handleUpdateStatus}>
                        {loading ? "Adding the request" : "Save changes"}
                    </button>
                    <button className="bg-yellow-300 text-black mr-2 rounded-lg hover:bg-yellow-400 transition-colors duration-100 ease-in-out" onClick={()=>{setAddComments(true)}}>
                        Comment
                    </button>
                    <button className="bg-gray-500 text-white mr-2 rounded-lg hover:bg-gray-400 transition-colors duration-100 ease-in-out" onClick={()=>{setDetails(false)}}>
                        Close
                    </button>
                </div> 
                {addComments && <AddComments setAddComments={setAddComments} tickId={ticket.id}/>}      
            </div>
        </>
    )
}