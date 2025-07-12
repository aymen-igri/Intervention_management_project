import { useState } from "react"
import Info from "./Info";
import InfoConn from "./InfoConn";

export default function ModifyInfoMU({setChanges}){
    const [info,setInfo] = useState(true);
    const [infoConn,setInfoConn] = useState(false);

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
                            {info && <Info setInfo={setInfo} />}
                            {infoConn && <InfoConn setInfoConn={setInfoConn} /> }
                        </div>
                        <div className="flex flex-row justify-start mt-4">
                            <button className="bg-green-600 text-white mr-2" >
                            Save changes
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