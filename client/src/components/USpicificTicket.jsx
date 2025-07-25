import { useState } from "react"
import api from "../services/api"
import { format} from 'date-fns'
import {Download} from 'lucide-react'
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import OCPLogo from '../assets/images-removebg-preview.png'

export default function USpicificTicket({ticket,setDetails}){

    const [updatedTicket,setUpdatedTicket] = useState({
        title: ticket?.title ?? '',
        description: ticket?.description ?? '',
        categorie: ticket?.categorie ?? ''
    })
    const [loading,setLoading] = useState(false);
    const closeDate = ticket.closed_at ? format(new Date(ticket.closed_at), 'dd-MM-yyyy') : "not yet"

    function handleUpdateTicket(){

        setLoading(true);

        try{

            const response = api.patch(`/ticket/updateTicket/${ticket.id}`,updatedTicket)
            console.log(response)

        }catch(err){

            console.log(`error at the update: ${err}`);

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
                ["Category", ticket.categorie || 'N/A'],
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
    
    return(
        <>
            <div className="z-25 bg-black opacity-40 w-[200%] h-[200%] fixed bottom-[-10%] left-[-10%]" onClick={()=>{setDetails(false)}}></div>
            <div className="bg-white z-40 text-black fixed top-[8%] left-[24.5%] p-6 flex justify-center flex-col items-start rounded-lg font-medium w-[53%]">
                <div className="flex flex-row items-center justify-between w-full ">
                    <h3 className="mb-3">Id: {ticket.id}</h3>
                    <button onClick={exportTicketToPDF}>
                        <Download color="green" />
                    </button>   
                </div>
                <div className="flex flex-row justify-center items-center w-full">
                    <label htmlFor="">title</label>
                    <input 
                    type="text" 
                    min="0" 
                    value={updatedTicket.title}
                    onChange={(e)=>{setUpdatedTicket({...updatedTicket,title:e.target.value})}}
                    className='border border-gray-300 rounded-md p-2 w-full h-10 m-3 placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>
                </div>
                <div className="flex flex-row justify-center items-start w-full">
                    <label className="mt-4">Description</label>
                    <textarea 
                        value={updatedTicket.description}
                        onChange={(e)=>{setUpdatedTicket({...updatedTicket,description:e.target.value})}}
                        className='border border-gray-300 rounded-md p-2 h-full w-full m-3 placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                        required/>
                </div>
                <div className="flex flex-row justify-center items-start w-full">
                    <label className="mt-4">Categorie</label>
                    <select  placeholder="Role" id="role" 
                        className="border w-[95%] border-gray-300 rounded-md p-2 h-10 placeholder-gray-400 text-emerald-950 mr-2 m-3  focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium"
                        onChange={(e)=>{setUpdatedTicket({...updatedTicket,categorie:e.target.value})}}
                        >
                        <option value="software">Software</option>
                        <option value="hardware">Hardware</option>
                        <option value="network">Network</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <h3 className="mb-3">Status: {ticket.status}</h3>
                <h3 className="mb-3">created at:  {format(new Date(ticket.created_at), 'dd-MM-yyyy')}</h3>
                <h3 className="mb-3">closed at:  {closeDate}</h3>
                <div className="mt-7 mr-7">
                    <button className="bg-green-600 text-white mr-2 rounded-lg hover:bg-green-400 transition-colors duration-100 ease-in-out" onClick={handleUpdateTicket}>
                        {loading ? "Adding the request" : "Save changes"}
                    </button>
                    <button className="bg-gray-600 text-white mr-2 rounded-lg hover:bg-gray-400 transition-colors duration-100 ease-in-out" onClick={()=>{setDetails(false)}}>
                        Close
                    </button>
                </div>   
            </div>
        </>
    )
}