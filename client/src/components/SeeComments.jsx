import { useEffect, useState } from "react";
import api from "../services/api";
import { format } from 'date-fns';

export default function SeeComments({ticket,setSeeComments}){

    const [comments,setComments] = useState([]);
     

    useEffect(()=>{
        
        api.get(`/comment/getComments/${ticket.id}`)
        .then(res=>{setComments(res.data.reverse());console.log(res.data)})
        .catch(console.error);

    },[ticket])
    
    const commentsList = comments.map((c)=>{

        const roleUserStyle = c.roleUser === "technician" ? "text-blue-500 font-medium" : "text-gray-500 font-medium";

        return(
            <div className="flex flex-row justify-start mb-2 w-full bg-gray-200 p-2 rounded-2xl">
                <div className="flex flex-col items-start">
                    <h4 className="text-start font-medium text-black text-2xl">{c.author_name + " " + c.author_family_name}</h4>
                    <h6 className={roleUserStyle}>{c.roleUser}</h6>
                    <h6 className="text-start font-thin text-gray-500 text-sm">{format(new Date(ticket.created_at), 'dd-MM-yyyy')}</h6>
                </div>
                <p className="text-start mb-1 rounded-2xl max-w-[150%] w-[150%] ml-2 bg-gray-100 p-2">{c.content}</p>
            </div>
        )
    })
    return(
        <>
            <div className="z-25 bg-black opacity-40 w-[200%] h-[200%] fixed bottom-[-10%] left-[-10%]" onClick={()=>{setSeeComments(false)}}></div>
            <div className="bg-white z-40 text-black fixed top-[9%] left-[24.2%] p-6 rounded-lg font-medium max-w-2xl w-2xl">
                <div className="mt-7 mr-7">
                    <div className=" mt-4 ml-2">
                        <div className="flex flex-col items-center justify-start overflow-y-auto scroll-bar-hide h-100">
                            {commentsList}
                        </div>
                        <button className="bg-gray-500 text-white mr-2 flex mt-2" onClick={()=>{setSeeComments(false)}}>
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}