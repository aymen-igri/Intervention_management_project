import '../style/dashboard.css'

export default function List({data}){
    const list = data.map((d)=>{
        const style = d.status === "active" ? "text-green-400" : "text-red-400" ;
        return (
            <div className="text-black p-2 pl-5 pr-5 flex justify-around w-full hover:bg-gray-200 transition-all duration-300 ease-in-out ">
                <h2>{d.name}</h2>
                <h2 className={style}>{d.status}</h2>
            </div>
        )
    })
    return (
        <div className="bg-white shadow-lg mt-[-4.9%] w-full ml-5 rounded-lg ">
            <div className=" text-black p-2 pl-5 pr-5 flex justify-around w-full scroll-bar-hide">
                <h2 >name</h2>
                <h2 >status</h2>
            </div>
            <div className="h-86 overflow-y-auto scroll-bar-hide">
                {list}
            </div>
            
        </div>
    )
}