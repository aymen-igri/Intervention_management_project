//used as a comp for the main user info changes
export default function Info({setInfo}){
    if(setInfo)
    {
        return(
            <>
                <div className="flex flex-row justify-between mb-2">
                    <input 
                    type="text"
                        min="0"
                        placeholder='Name' 
                        className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                        required/>
                    <input 
                        type="text" 
                        min="0"
                        placeholder='Family name' 
                        className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                        required/>
                </div>
                <input 
                    type="text" 
                    min="0"
                    placeholder='Phone number' 
                    className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 mb-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>        
                <textarea 
                    placeholder='about' 
                    className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 mb-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>
            </>
        )
    }
    
}