import BlocksHeader from "@/components/BlocksHeader"
import { brands } from "@/consts/consts"



const Brands = () => {
    return (
        <BlocksHeader title="Top Brands">
            <ul className="flex items-center gap-5 flex-wrap justify-around">
                {
                    brands.map(({label, imageSrc}) => (
                        <li className="flex">
                            <img className="max-w-full" src={imageSrc} alt={label} />
                        </li>
                    ))
                }
            </ul>
        </BlocksHeader>
    )
}

export default Brands