import { useState } from 'react';
import '../style/dashboard.css'

export default function AssignToUser({data,setDesabledB,setSelectedUser}){
    const [selectedId,setSelectedId] = useState(null);

    const list = data.map((d)=>{
       const isSelected = selectedId === d.id;
       const style =
      d.status === "active"
        ? "text-green-700 rounded-full px-3 py-1 bg-green-100 text-sm font-medium"
        : "text-red-700 rounded-full px-3 py-1 bg-red-100 text-sm font-medium"
        const roleStyle = () => {
        if (d.role === "admin") return "text-amber-700 rounded-full px-3 py-0.5 bg-amber-200 text-sm font-medium"
        else if (d.role === "superviser") return "text-blue-700 rounded-full px-3 py-0.5 bg-blue-200 text-sm font-medium"
        else if (d.role === "Technician") return "text-green-700 rounded-full px-3 py-1 bg-green-200 text-sm font-medium"
        else return "text-gray-700 rounded-full px-3 py-1 bg-gray-100 text-sm font-medium"
        }
        return (
              <div className={`text-gray-800 p-4 flex items-center justify-between w-full border-b border-gray-100  transition-all duration-300 ease-in-out ${isSelected?"bg-green-200":"hover:bg-gray-50"}`} key={d.id} onClick={()=>{setDesabledB(false);setSelectedId(d.id),setSelectedUser(d)}}>
                <h2 className="w-32 text-left font-medium">{d.name}</h2>
                <h2 className="w-32 flex justify-center">
                  <span className={roleStyle()}>{d.role}</span>
                </h2>
                <h2 className="w-32 flex justify-center">
                  <span className={style}>{d.status}</span>
                </h2>
              </div>
            )
          })
            return(
               <div className="bg-white rounded-md border-1 border-gray-300 mx-auto w-[102%] ml-2 mt-[-5%] ">
                    <div className="text-gray-700 font-semibold flex items-center justify-between w-full p-4  bg-white rounded-t-lg border-b border-gray-200">
                        <h2 className="w-32 text-left">Name</h2>
                        <h2 className="w-32 text-center">Role</h2>
                        <h2 className="w-32 text-center">Status</h2>
                    </div>
                    <div className="max-h-81 overflow-y-auto scroll-bar-hide">{list}</div>
                </div>
            )
}