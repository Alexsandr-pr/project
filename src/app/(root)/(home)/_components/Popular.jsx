import Link from "next/link"


const Popular = () => {
    return (
        <div className="h-full my-3 md:my-6 flex pl-2.5 mb:pl-6 md:pl-16 pr-0 justify-between  bg-[#223949] rounded-lg">
            <div className="pt-6 pb-7 mb:pb-10 sm:py-8 flex flex-col items-start sm:items-center justify-center">
                <h2 className=" mb-2 sm:mb-4 text-white text-base sm:text-3xl lg:text-[44px] font-medium ">
                    SMART WATCH
                </h2>
                <p className="text-[10px] mb-8 sm:text-lg lg:text-2xl text-white font-light">Various designs and brands</p>
                <Link href={"/"} className="text-[#223949]  text-base font-normal text-center p-2 px-4 rounded-lg bg-[#FF6951]">
                    View
                </Link>
            </div>
            <div className="basis-[62.5%] sm:basis-[54%] flex justify-end">
                <picture className="max-w-full h-full">
                    <source media="(min-width: 640px)" srcset="/assets/img/popular/image.png" type="image/png" />
                    <img className="max-w-full h-full" src="/assets/img/popular/image-mobile.png" alt="smart" />
                </picture>
            </div>
        </div>
    )
}

export default Popular