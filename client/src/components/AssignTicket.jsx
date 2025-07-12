import { useState } from "react"
import List from "./List"
import AssignToUser from "./AssignToUser";

export default function AssignTicket({setAssign}){

    const [selectedUser,setSelectedUser] = useState(null);
    const [disabledB,setDisabledB] = useState(true);

    const users = [
                {id:"1",name: "aymen" , role:"admin", status: "active"},
                {id:"2",name: "aymen" , role:"superviser" , status: "active"},
                {id:"3",name: "aymen" , role:"Technician" , status: "offline"},
                {id:"4",name: "aymen" , role:"utilisateur" , status: "active"},
                {id:"5",name: "aymen" , role:"admin", status: "offline"},
                {id:"6",name: "aymen" , role:"Technician" , status: "active"},
                    ]

    return(
        <>
            <div className="z-25 bg-black opacity-40 w-[200%] h-[200%] fixed bottom-[-10%] left-[-10%]" onClick={()=>{setAssign(false)}}></div>
            <div className="bg-white z-40 text-black fixed top-[11.5%] left-[29.7%] p-6 flex justify-center flex-col items-start rounded-lg font-medium max-w-2xl">
                <div className="mt-7 mr-7">
                    <AssignToUser data={users} setDesabledB={setDisabledB} setSelectedUser={setSelectedUser}/>
                    <div className="flex mt-4 ml-2">
                        <button className="bg-green-600 text-white mr-2 disabled:bg-green-200" disabled={disabledB}>
                            Assign
                        </button>
                        <button className="bg-gray-500 text-white mr-2" onClick={()=>{setAssign(false)}}>
                            Back
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}