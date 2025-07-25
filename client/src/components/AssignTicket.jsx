import { useEffect, useState } from "react"
import AssignToUser from "./AssignToUser";
import api from "../services/api";

export default function AssignTicket({ticket,setAssign}){

    const [users,setUsers] = useState([])
    const [selectedUser,setSelectedUser] = useState(null);
    const [disabledB,setDisabledB] = useState(true);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        api.get(`/user/getUsersAssign`)
        .then(res=>{setUsers(res.data);console.log(res.data)})
        .catch(console.error);
    },[])

    async function handleAssignTicket() {

        setLoading(true);
        console.log(selectedUser);
        console.log(ticket.id);

        try {
            const response = await api.patch(`/ticket/AssingTicketToTech/${ticket.id}`, { techId: selectedUser.id });
            console.log(response);
        } catch (err) {
            console.log(`error at the assign ticket: ${err}`);
        } finally {
            setLoading(false);
            window.location.reload();
        }
    }

    return(
        <>
            <div className="z-25 bg-black opacity-40 w-[200%] h-[200%] fixed bottom-[-10%] left-[-10%]" onClick={()=>{setAssign(false)}}></div>
            <div className="bg-white z-40 text-black fixed top-[11.5%] left-[29.7%] p-6 flex justify-center flex-col items-start rounded-lg font-medium max-w-2xl">
                <div className="mt-7 mr-7">
                    <AssignToUser data={users} setDesabledB={setDisabledB} setSelectedUser={setSelectedUser}/>
                    <div className="flex mt-4 ml-2">
                        <button className="bg-green-600 text-white mr-2 rounded-lg hover:bg-green-400 transition-colors duration-100 ease-in-out" disabled={disabledB} onClick={handleAssignTicket}>
                            {loading ? "Assigning..." : "Assign"}
                        </button>
                        <button className="bg-gray-600 text-white mr-2 rounded-lg hover:bg-gray-400 transition-colors duration-100 ease-in-out" onClick={()=>{setAssign(false)}}>
                            Back
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}