import '../../../style/userm.css' 
import UTicketsList from '../../../components/UTicketsList';
import { useEffect, useState } from 'react';
import NewTicket from '../../../components/NewTicket';
import api from "../../../services/api"
import {useMainUser} from "../../../context/MainUser/useMainUser"
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import OCPLogo from '../../../assets/images-removebg-preview.png'

export default function UTicketsPage(){
    const [newUser,setNewUser] = useState(false);
    const {user} = useMainUser();
    const [searchTicket,setSearchTicket] = useState({
            id:"",
            title:"",
            categorie:"",
            status:"",
        })
    const [tickets,setTickets] = useState([]);

    useEffect(() => {
        
            api.get(`/ticket/getTiketsByUserId/${user.id}`)
                .then(res => {setTickets((res.data).reverse());console.log(res.data)})
                .catch(console.error);
    },[user.id])
    
    const exportToPDF = () => {
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
        
                doc.setFontSize(18);
                doc.setTextColor(0, 128, 64);
                doc.text("Tickets List", 105, 30, null, null, 'center');
        
                // Define columns and rows for the table
                const tableColumn = ["ID", "Title", "Categorie", "Status"];
                const tableRows = [];
        
                tickets.forEach(t => {
                    const userData = [
                        t.id || '',
                        t.title || '',
                        t.categorie || '',
                        t.status || ''
                    ];
                    tableRows.push(userData);
                });
        
                // Generate the professional table
                autoTable(doc, {
                    head: [tableColumn],
                    body: tableRows,
                    startY: 40,
                    theme: 'grid',
                    styles: {
                        fontSize: 10,
                        cellPadding: 3
                    },
                    headStyles: {
                        fillColor: [0, 128, 64],
                        textColor: [255, 255, 255],
                        fontStyle: 'bold'
                    },
                    alternateRowStyles: {
                        fillColor: [248, 249, 250]
                    },
                    tableLineColor: [220, 220, 220],
                    tableLineWidth: 0.1
                });
        
                // Add export date at the bottom right corner
                const finalY = doc.lastAutoTable.finalY || 40;
                doc.setFontSize(9);
                doc.setTextColor(150, 150, 150);
                doc.text(`Exported on: ${currentDate}`, 195, finalY + 15, null, null, 'right');
        
                // Save the PDF
                doc.save(`Tickets-List_${new Date().toISOString().split('T')[0]}.pdf`);
            }
    

        return(
            <>
                <h1 className='absolute top-[3%] left-[7.2%] dropdown text-2xl text-green-600 font-bold z-10 mb-5'>My tickets</h1>
                <div>
                    <div className="absolute left-5 bottom-[75%] flex flex-row justify-around w-[100.2%] dropdown">
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
                            <select placeholder="Status" id="Status" className="border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium" onChange={(e)=>{setSearchTicket({...searchTicket,status:e.target.value})}}>
                                <option value="">All the status</option>
                                <option value="open">Open</option>
                                <option value="in prograss">In prograss</option>
                                <option value="resolved">Resolved</option>
                                <option value="rejected">Rejected</option>
                                <option value="closed">Closed</option>
                            </select>
                        </div>
                        <div className="relative right-0 flex flex-row  items-center justify-between h-10">
                            <button className="text-green-600 h-11 border shadow-md mr-2 bg-white  hover:text-white hover:bg-green-600 button_problem" onClick={exportToPDF}>
                                Export
                            </button>
                            <button className="text-white h-11 border shadow-md mr-2 bg-green-600  hover:bg-green-800 button_problem" onClick={()=>{setNewUser(true)}}>
                                New request
                            </button>
                        </div>
                        
                    </div>
                    <div className='relative top-35 right-85.5 w-[146%] h-[600px] dropdown'>
                        <UTicketsList data={tickets} ticketSearched={searchTicket}/>
                    </div>
                    {newUser && <NewTicket setNewUser={setNewUser} />}
                </div>
            </>
        )
}