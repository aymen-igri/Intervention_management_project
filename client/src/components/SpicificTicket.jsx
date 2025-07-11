export default function SpicificTicket({ticket,setDetails}){
    return(
        <>
            <div className="z-25 bg-black opacity-40 w-[200%] h-[200%] fixed bottom-[-10%] left-[-10%]" onClick={()=>{setDetails(false)}}></div>
            <div className="bg-white z-40 text-black fixed top-[10%] left-[24.5%] p-6 flex justify-center flex-col items-start rounded-lg font-medium max-w-2xl">
                <h3 className="mb-3">Id: {ticket.id}</h3>
                <h3 className="mb-3">Title: {ticket.Title}</h3>
                <div className="flex justify-start">
                   <h3 className="mb-3">Description: </h3> <p>{ticket.description}</p>
                </div>
                <h3 className="mb-3">Categorie: {ticket.categorie}</h3>
                <h3 className="mb-3">Priority: {ticket.priority}</h3>
                <h3 className="mb-3">Status: {ticket.status}</h3>
                <h3 className="mb-3">User: {ticket.user}</h3>
                <h3 className="mb-3">Technician: {ticket.tech}</h3>
                <h3 className="mb-3">created at: {ticket.created}</h3>
                <h3 className="mb-3">closed at: {ticket.closed}</h3>
                <h3 className="mb-3">status: {ticket.status}</h3>
                <div className="mt-7 mr-7">
                    <button className="bg-green-600 text-white mr-2 ">
                    Assign
                    </button>
                    <button className="bg-red-600 text-white mr-2">
                        Close ticket
                    </button>
                    <button className="bg-gray-500 text-white mr-2" onClick={()=>{setDetails(false)}}>
                        Close
                    </button>
                </div>
            </div>
        </>
    )
}