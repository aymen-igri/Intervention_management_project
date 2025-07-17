//used as a comp for the main user connection info changes
//used as a comp for the main user info changes
export default function InfoConn({infoConn,infoConnData,setInfoConnData}){
    if(infoConn)
    {
        return(
            <>
                <input 
                    type="email" 
                    min="0"
                    placeholder='Email' 
                    className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 mb-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    value={infoConnData.email}
                    onChange={(e)=>{setInfoConnData({...infoConnData,email:e.target.value})}}
                    required/>
                <div className="flex flex-row justify-between mb-2">
                    <input 
                    type="password"
                        min="0"
                        placeholder='Password' 
                        className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                        value={infoConnData.password}
                        onChange={(e)=>{setInfoConnData({...infoConnData,password:e.target.value})}}
                        required/>
                </div>
            </>
        )
    }
    
}