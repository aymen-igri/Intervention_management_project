import { useState } from "react"
import { useMainUser } from "../context/MainUser/useMainUser";
import api from "../services/api";

export default function AddComments({setAddComments,tickId}){

    const [comment,setComment] = useState("");
    const {user} = useMainUser();

    async function  handleAddComment(){

        try{

            const response = await api.post(`/comment/addComment/${tickId}`,{content:comment,techId:user.id});
            console.log(response.data);

        }catch(err){
             console.log(err.response);
        }finally{
            setAddComments(false)
        }
        
    }
    return(
        <>
            <div className="z-25 bg-black opacity-40 w-[200%] h-[200%] fixed bottom-[-10%] left-[-10%]" onClick={()=>{setAddComments(false)}}></div>
            <div className="bg-white z-40 text-black fixed top-[35%] left-[24.2%] p-6 rounded-lg font-medium w-2xl">
                <textarea 
                    placeholder='Add a comment' 
                    className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 mb-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    value={comment}
                    onChange={(e)=>{setComment(e.target.value)}}
                    required/>
                <div className="flex justify-start">
                    <button className="bg-green-600 text-white mr-2" onClick={handleAddComment}>
                        Assign
                    </button>
                    <button className="bg-gray-500 text-white mr-2" onClick={()=>{setAddComments(false)}}>
                        Back
                    </button>
                </div>
            </div>
        </>
    )
}