export default function Info({info,infoData,setInfoData}){
    if(info)
    {
        return(
            <>
                <div className="flex flex-row justify-between mb-2">
                    <input 
                    type="text"
                        min="0"
                        placeholder='Name' 
                        className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                        value={infoData.name}
                        onChange={(e)=>{setInfoData({...infoData,name:e.target.value})}}
                        required/>
                    <input 
                        type="text" 
                        min="0"
                        placeholder='Family name' 
                        className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                        value={infoData.familyName}
                        onChange={(e)=>{setInfoData({...infoData,familyName:e.target.value})}}
                        required/>
                </div>
                <input 
                    type="text" 
                    min="0"
                    placeholder='Phone number' 
                    className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 mb-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    value={infoData.phone}
                    onChange={(e)=>{setInfoData({...infoData,phone:e.target.value})}}
                    required/>        
                <textarea 
                    placeholder='about' 
                    className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 mb-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    value={infoData.about}
                    onChange={(e)=>{setInfoData({...infoData,about:e.target.value})}}
                    required/>
            </>
        )
    }
    
}