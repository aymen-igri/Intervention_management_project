//used as a comp for the main user connection info changes
//used as a comp for the main user info changes
export default function InfoConn({setInfoConn}){
    if(setInfoConn)
    {
        return(
            <>
                <input 
                    type="email" 
                    min="0"
                    placeholder='Email' 
                    className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 mb-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>
                <div className="flex flex-row justify-between mb-2">
                    <input 
                    type="password"
                        min="0"
                        placeholder='Password' 
                        className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                        required/>
                    <input 
                        type="password" 
                        min="0"
                        placeholder='Confirm your password' 
                        className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                        required/>
                </div>
            </>
        )
    }
    
}