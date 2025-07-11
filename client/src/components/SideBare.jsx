import '../style/sidebar.css'

export default function SideBare({SideBareContent}){
    return(
        <div className="z-20 group text-black bg-white shadow-md border-r-1 border-r-gray-300 fixed bottom-0 left-0 h-screen w-16 hover:w-50 toleft_animation transition-all duration-300 ease-in-out overflow-hidden">
            {/* i didn't change the size of the icons, i did change the width of the div so that makes the icons smaller */}
            {SideBareContent()}
        </div>
    )
}