export default function DataShow({text,number}){
    return(
        <div className="bg-white p-4 rounded-lg shadow-md m-4 mt-35 min-w-[200px] hover:translate-y-[-5px] hover:shadow-lg transition-all duration-300 ease-in-out">
            <h3 className="text-sm text-gray-600 mb-2">{text}</h3>
            <p className="text-2xl font-bold text-green-600">{number}</p>
        </div>
    )
}