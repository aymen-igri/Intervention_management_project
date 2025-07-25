import { useEffect, useState } from 'react';
import UsersList from '../../../components/UsersList'
import '../../../style/userm.css' 
import AddUser from '../../../components/AddUser';
import api from '../../../services/api';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import OCPLogo from '../../../assets/images-removebg-preview.png'

export default function AUsersPage(){

    const [newUser,setNewUser] = useState(false);
    const [users,setUsers] = useState([])
    const [searchUser,setSearchUser] = useState({
        id:"",
        name:"",
        email:"",
        role:"",
        status:""
    });

    useEffect(()=>{
        api.get(`/user/getAllUsers`)
        .then(res=>{setUsers(res.data.reverse());console.log(res.data)})
        .catch(console.error);
    },[])

    // PDF exportation of the users list
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
        doc.text("Users List", 105, 30, null, null, 'center');

        // Define columns and rows for the table
        const tableColumn = ["ID", "Name", "Email", "Role", "Status"];
        const tableRows = [];

        users.forEach(user => {
            const userData = [
                user.id || '',
                user.name || '',
                user.email || '',
                user.role || '',
                user.status || ''
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
        doc.save(`users-List_${new Date().toISOString().split('T')[0]}.pdf`);
    }

    return(
        <>
            <h1 className='absolute top-[3%] left-[7.2%] dropdown text-2xl text-green-600 font-bold z-10 mb-5'>Users management</h1>
            <div>
                <div className="absolute left-[1.8%] bottom-[75%] flex flex-row justify-around w-full dropdown">
                    <div className="relative left-0 flex flex-row justify-between w-3xl">
                        <input 
                            type="text"
                            onChange={(e)=>{setSearchUser({...searchUser,id:e.target.value})}}
                            min="0"
                            placeholder='Id' 
                            className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                            required/>
                        <input 
                            type="text" 
                            onChange={(e)=>{setSearchUser({...searchUser,name:e.target.value})}}
                            min="0"
                            placeholder='Full name' 
                            className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                            required/>
                        <input 
                            type="email" 
                            onChange={(e)=>{setSearchUser({...searchUser,email:e.target.value})}}
                            min="0"
                            placeholder='Email' 
                            className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                            required/>
                        <select placeholder="Role" id="role" className="border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium" onChange={(e)=>{setSearchUser({...searchUser,role:e.target.value})}}>
                            <option value="">All the roles</option>
                            <option value="administrator">Administrator</option>
                            <option value="technician">Technician</option>
                            <option value="user">User</option>
                        </select>
                        <select placeholder="Status" id="status" className="border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium" onChange={(e)=>{setSearchUser({...searchUser,status:e.target.value})}}>
                            <option value="">All the users</option>
                            <option value="active">Active</option>
                            <option value="offline">Offline</option>
                            <option value="banned">Banned</option>
                        </select>
                    </div>
                    <div className="relative right-0 flex flex-row items-center justify-between h-10">
                        <button className="text-green-600 h-11 border shadow-md mr-2 bg-white  hover:text-white hover:bg-green-600 button_problem" onClick={exportToPDF}>
                            Export
                        </button>
                        <button className="text-white h-11 border shadow-md mr-2 bg-green-600  hover:bg-green-800 button_problem" onClick={()=>{setNewUser(true)}}>
                            Add new user
                        </button>
                    </div>
                    
                </div>
                <div className='relative top-35 right-41.5 w-[146%] h-[600px] dropdown'>
                    <UsersList data={users} userSearched={searchUser}/>
                </div>
                {newUser && <AddUser setNewUser={setNewUser} />}
            </div>
        </>
    )
}