import { useState } from "react"
import Info from "./Info";
import InfoConn from "./InfoConn";
import { useMainUser } from "../context/MainUser/useMainUser";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function ModifyInfoMU({setChanges}){

    const [info,setInfo] = useState(true);
    const {user,setUser,logout} = useMainUser();
    const [infoConn,setInfoConn] = useState(false);
    const [infoData, setInfoData] = useState({
        name: user?.name ?? '',
        familyName: user?.familyName ?? '',
        phone: user?.phone ?? '',
        about: user?.about ?? ''
    });
    const [infoConnData,setInfoConnData] = useState({
        email: user?.email ?? '',
        password: user?.password ?? ''
    });
    const navigate = useNavigate();
    

    async function handleUpdate(){

        try{

            const {data: prof} = await api.patch(`/user/updateInfo/${user.id}` , infoData);
            console.log(prof);
            
            const {data:conn} = await api.patch(`/user/updateConn/${user.id}` , infoConnData);
            console.log(conn);
           

            const newMainUser = {
                id: user.id,
                role: user.role,
                token: user.token,
                joined_at:user.joined_at,
                ...prof,
                ...conn
            }

            setUser(newMainUser);
            localStorage.setItem('user',JSON.stringify(newMainUser));

        }catch(err){
            console.log(`error in the catch part: ${err}`)
        }
    }

    function handleLogout(){
        logout();
        navigate('/signin')
    }

    const buttonStyle1 = info ?"bg-green-600 text-white "  : "bg-gray-100 text-gray-700 hover:bg-gray-200";
    const buttonStyle2 = infoConn ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700  hover:bg-gray-200";
        return(
            <>
                <div className="z-25 bg-black opacity-40 w-[200%] h-[200%] fixed bottom-[-10%] left-[-10%]" onClick={()=>{setChanges(false)}}></div>
                <div className="bg-white z-40 text-black fixed top-[17%] left-[18%] p-6 flex justify-center flex-col items-start rounded-lg font-medium">
                    <div className="">
                        <div className="bg-white border-[0.5px] text-gray-600 rounded-lg border-gray-200 p-2 mb-4 flex flex-row justify-between items-center">
                            <button className={`${buttonStyle1} mr-[4px] w-sm `} onClick={()=>{setInfo(true);setInfoConn(false)}}>
                                Profile information
                            </button>
                            <button className={`${buttonStyle2} w-sm`} onClick={()=>{setInfo(false);setInfoConn(true)}}>
                                Conection information
                            </button>
                        </div>
                        <div>
                            {info && <Info info={info} infoData={infoData} setInfoData={setInfoData} />}
                            {infoConn && <InfoConn infoConn={infoConn} infoConnData={infoConnData} setInfoConnData={setInfoConnData} /> }
                        </div>
                        <div className="flex flex-row justify-start mt-4">
                            <button className="bg-green-600 text-white mr-2" onClick={()=>{handleUpdate();setChanges(false)}}>
                                Save changes
                            </button>
                            <button className="bg-red-600 text-white mr-2" onClick={handleLogout}>
                                log out
                            </button>
                            <button className="bg-gray-500 text-white " onClick={()=>{setChanges(false)}}>
                                Close
                            </button>
                        </div>
                        
                    </div>        
                </div>
            </>
        )
}