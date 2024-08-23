import Image from "next/image"
import Stats from "./ui/Stats"

const BlogVertical = ({
    type,
    title,
    description,
    imageSrc,
    stats
}) => {

    return (
        <div className={`flex gap-2 relative bg-white duration-300 transition-all hover:cursor-pointer shadow-2 group rounded-lg ${type === "stroke" ? " flex-row items-center" : "flex-col"}`}>
            <Image
                className={` w-full h-full ${type === "stroke" ? "min-w-60 max-w-60 rounded-l-lg" : "rounded-t-lg"}`}
                alt={title}
                height={type === "stroke" ? 156 : 204}
                src={imageSrc}
                width={type === "stroke" ? 240 : 392}
            />
            <div className={`pt-0 flex gap-2 ${ type === "stroke" ? " flex-col-reverse px-4" : " flex-col p-4"}`}>
                <Stats type={type} timeReading={stats.timeReading} dateAdded={stats.dateAdded}/>
                <div className={`flex flex-col gap-2 ${type === "stroke" ? "mb-2" : null}`}>
                    <h3 className="text-black duration-300 transition-colors group-hover:text-secondar h-6 text-ellipsis overflow-hidden text-base md:text-xl font-medium">{title}</h3>
                    <p className={`line-clamp-2 text-xs  text-base overflow-hidden text-ellipsis font-light text-grey-500 md:text-black ${ type === "stroke" ? "h-8" : "h-10 md:h-12"}`}>{description}</p>
                </div>
            </div>
            <button className="group-hover:opacity-100 transition-opacity duration-300 opacity-0 absolute bottom-4 z-20 right-4">
                <img src="/assets/icon/save.svg" alt="Save" />
            </button>
        </div>
    )
}

export default BlogVertical