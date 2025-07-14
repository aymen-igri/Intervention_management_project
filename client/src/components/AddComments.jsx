export default function AddComments({setAddComments}){

    return(
        <>
            <div className="z-25 bg-black opacity-40 w-[200%] h-[200%] fixed bottom-[-10%] left-[-10%]" onClick={()=>{setAddComments(false)}}></div>
            <div className="bg-white z-40 text-black fixed top-[35%] left-[24.2%] p-6 rounded-lg font-medium w-2xl">
                <textarea 
                    placeholder='Add a comment' 
                    className='border border-gray-300 rounded-md p-2 w-full placeholder-gray-400 text-emerald-950 mr-2 mb-2 focus:outline-2 focus:outline-green-500 transition-colors duration-300 ease-in-out font-medium'
                    required/>
                <div className="flex justify-start">
                    <button className="bg-green-600 text-white mr-2 " >
                        Assign
                    </button>
                    <button className="bg-gray-500 text-white mr-2" onClick={()=>{setAddComments(false)}}>
                        Back
                    </button>
                </div>
            </div>
        </>
    )
}