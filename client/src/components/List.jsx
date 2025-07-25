import '../style/dashboard.css'

export default function List({data}){
    const list = data.map((d)=>{
        const statusStyle = () => {
          if(d.status !== "banned") return "text-green-100 rounded-full px-3 py-1 bg-green-700 text-sm font-medium"
          else return "text-red-100 rounded-full px-3 py-1 bg-red-700 text-sm font-medium"
        }

        const status = d.status === "banned" ? "Banned" : "Active";

        const roleStyle = () => {
          if (d.role === "administrator") return "text-amber-700 rounded-full px-3 py-0.5 bg-amber-200 text-sm font-medium" 
          else if (d.role === "technician") return "text-green-700 rounded-full px-3 py-1 bg-green-200 text-sm font-medium"
          else return "text-gray-700 rounded-full px-3 py-1 bg-gray-100 text-sm font-medium"
        }
        return (
              <div className="text-gray-800 p-4 flex items-center justify-between w-full border-b border-gray-100 hover:bg-gray-50 transition-all duration-300 ease-in-out" key={d.id}>
                <h2 className="w-32 text-left font-medium">{d.name}</h2>
                <h2 className="w-32 flex justify-center">
                  <span className={roleStyle()}>{d.role}</span>
                </h2>
                <h2 className="w-32 flex justify-center">
                  <span className={statusStyle()}>{status}</span>
                </h2>
              </div>
            )
          })
            return(
               <div className="bg-white shadow-lg rounded-lg mx-auto w-[97.4%] ml-4 mt-[-5%]">
                    <div className="text-gray-700 font-semibold flex items-center justify-between w-full p-4  bg-white rounded-t-lg border-b border-gray-200">
                        <h2 className="w-32 text-left">Name</h2>
                        <h2 className="w-32 text-center">Role</h2>
                        <h2 className="w-32 text-center">Status</h2>
                    </div>
                    <div className="max-h-81 overflow-y-auto scroll-bar-hide">{list}</div>
                </div>
            )
}