export default function DataShow({text,number}){
    return(
        <div className='flex flex-col itmes-center bg-[#F9FAFB] border-1 border-green-600 rounded-2xl text-green-600 font-bold p-2 z-10 m-4 max-w-xl hover:bg-green-600 hover:text-white hover:translate-y-[-5px] transition-all duration-300 ease-in-out'>
                    <span>{text}</span>
                    <span>{number}</span>
        </div>
    )
}