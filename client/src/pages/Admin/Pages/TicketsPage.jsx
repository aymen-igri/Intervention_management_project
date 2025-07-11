import '../../../style/userm.css' 
import TicketsList from '../../../components/TicketsList';

export default function TicketsPage(){

    const tickets = [
        {id:1 , title:"title1", categorie:"Hardware",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds  ", priority:"Low", status:"Resolved", user:"aymen", tech:"ahmed"},
        {id:2 , title:"title2", categorie:"Hardware",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds" , priority:"Low", status:"Rejected", user:"aymen", tech:"ahmed"},
        {id:3 , title:"title3", categorie:"Software",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds" , priority:"Madium", status:"Closed", user:"aymen", tech:"ahmed"},
        {id:4 , title:"title4", categorie:"Hardware",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds" , priority:"Low", status:"In progress", user:"aymen", tech:"ahmed"},
        {id:5 , title:"title5", categorie:"Hardware",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds", priority:"Critical", status:"Closed", user:"aymen", tech:"ahmed"},
        {id:6 , title:"title6", categorie:"Others",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds", priority:"Low", status:"In progress", user:"aymen", tech:"ahmed"},
        {id:7 , title:"title7", categorie:"Hardware",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds", priority:"Hight", status:"Resolved", user:"aymen", tech:"ahmed"},
        {id:8 , title:"title8", categorie:"Hardware",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds", priority:"Low", status:"Resolved", user:"aymen", tech:"ahmed"},
        {id:9 , title:"title9", categorie:"Others",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds", priority:"Low", status:"Resolved", user:"aymen", tech:"ahmed"},
        {id:10 , title:"title0", categorie:"Hardware",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds", priority:"Critical", status:"Resolved", user:"aymen", tech:"ahmed"},
        {id:11 , title:"title1", categorie:"Software",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds", priority:"Low", status:"Closed", user:"aymen", tech:"ahmed"},
        {id:12 , title:"title2", categorie:"Hardware",description:"hf fhfhf dfkfak d kfs hd dsds dsfsf dsfsf sdsfsf dsfdsffdsfsdf ddfss sds", priority:"Mdium", status:"In progress", user:"aymen", tech:"ahmed"},

    ]
    return(
        <>
            <h1 className='absolute top-[3%] left-[7.2%] dropdown text-2xl text-green-600 font-bold z-10 mb-5'>Tickets management</h1>
            <div>
                <div className="absolute right-[-7%] bottom-[75%] flex flex-row justify-around w-[110.8%] dropdown">
                    <div className="relative left-0 flex flex-row justify-between w-3xl">
                        <input 
                            type="number"
                            min="0"
                            placeholder='Id' 
                            className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                            required/>
                        <input 
                            type="text" 
                            min="0"
                            placeholder='Title' 
                            className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                            required/>
                        <select placeholder="Categorie" id="categorie" className="border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium">
                            <option value="Hardware">Hardware</option>
                            <option value="Software">Software</option>
                            <option value="Network">Network</option>
                            <option value="Others">Others</option>
                        </select>
                        <select placeholder="Priority" id="Priority" className="border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium">
                            <option value="Low">Low</option>
                            <option value="madium">madium</option>
                            <option value="hight">hight</option>
                            <option value="critical">critical</option>
                        </select>
                        <select placeholder="Status" id="Status" className="border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium">
                            <option value="Open">Open</option>
                            <option value="In prograss">In prograss</option>
                            <option value="Resolved">Resolved</option>
                            <option value="Rejected">Rejected</option>
                            <option value="Closed">Closed</option>
                        </select>
                    </div>
                    <div className="relative right-0 flex flex-row items-center justify-between h-10">
                        <button className="text-green-600 h-11 border shadow-md mr-2 bg-white  hover:text-white hover:bg-green-600 button_problem">
                            Export
                        </button>
                    </div>
                    
                </div>
                <div className='relative top-20 right-41.5 w-[146%] h-[200%] dropdown'>
                    <TicketsList data={tickets}/>
                </div>
            </div>
        </>
    )
}