import { advantages } from "@/consts/consts"


const Advantages = () => {
    return (
        
        <ul className="flex py-3 md:py-6 justify-between flex-wrap items-center gap-4 sm:gap-5">
            {
                advantages.map(({imageSrc, label}) => (
                    <li className="flex items-center gap-4"> 
                        <img className="max-w-8 md:max-w-16" src={imageSrc} alt="image" />
                        <p className="text-black font-medium text-sm sm:font-light sm:text-xl ">{label}</p>
                    </li>
                ))
            }
        </ul>
        
    )
}

export default Advantages