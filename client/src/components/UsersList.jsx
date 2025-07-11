import { useState } from "react"
import SpicificUser from "./SpicificUser"

export default function UsersList({data}){

    const [user,setUser] = useState([]);
    const [details,setDetails] = useState(false);

    const users = data.map((d) => {
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
      <div
        className="text-gray-800 p-4 flex items-center justify-between w-full border-b border-gray-100 hover:bg-gray-50 transition-all duration-300 ease-in-out" key={d.id} onClick={()=>{setUser(d);setDetails(true);}}>
        <h2 className="w-16 text-center font-medium">{d.id}</h2>
        <h2 className="w-48 text-left font-medium">{d.name}</h2>
        <h2 className="w-64 text-left text-gray-600">{d.email}</h2>
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
       <div className="bg-white shadow-lg rounded-lg mx-auto w-[97.4%]">
            <div className="text-gray-700 font-semibold flex items-center justify-between w-full p-4 bg-white rounded-t-lg border-b border-gray-200">
                <h2 className="w-16 text-center">ID</h2>
                <h2 className="w-48 text-left">Name</h2>
                <h2 className="w-64 text-left">Email</h2>
                <h2 className="w-32 text-center">Role</h2>
                <h2 className="w-32 text-center">Status</h2>
            </div>
            <div className="max-h-96 overflow-y-auto scroll-bar-hide">{users}</div>
            {details && <SpicificUser user={user} setDetails={setDetails} />}
        </div>
    )
}