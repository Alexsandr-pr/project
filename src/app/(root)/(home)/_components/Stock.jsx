import { Button } from "@/components/ui/button"


const Stock = () => {
    return (
        <div className='flex py-3 md:py-6 gap-6 flex-col lg:flex-row'>
            <div className=" overflow-hidden relative gap-1 sm:gap-5 pl-1 pr-3 pb-3 sm:p-6 pt-2.5 bg-stock rounded-lg flex"> 
                <img className="absolute -left-[70px]  top-[18px]" src="/assets/img/stock/ellipse.png" alt="" />
                <img className="absolute right-[50%]  -top-[57px]" src="/assets/img/stock/ellipse.png" alt="" />
                <img className="absolute -right-[23px] -bottom-[27px]" src="/assets/img/stock/ellipse.png" alt="" />
                <div className="w-1/2 flex flex-col justify-between">
                    <h3 className="mb-14 sm:pl-6 relative z-10 text-sm sm:text-2xl font-medium text-black">Iphone <span className="text-white"> 15 Series</span></h3>
                    <picture className="-mb-4 sm:mb-0 relative z-10" >
                        <source media="(min-width: 470px)" srcset="/assets/img/stock/iphone.png" type="image/png" />
                        <img src="/assets/img/stock/iphone-mobile.png" alt="" />
                    </picture>
                </div>
                <div className="w-1/2 xl:pr-12 relative z-10">
                    <div className="flex sm:pt-5 gap-1 sm:gap-4 mb-4 sm:mb-7">
                        <div className="w-7 h-7 sm:w-14 sm:h-14  items-center inline-flex flex-col py-0.5 px-1 sm:px-2 border text-black border-black rounded-md ">
                            <p className="text-[8px] sm:text-base font-medium">8</p>
                            <p className="text-[7px] sm:text-sm font-light">Days</p>
                        </div>
                        <div className=" w-7 h-7 sm:w-14 sm:h-14  items-center inline-flex flex-col py-0.5   px-1 sm:px-2 border text-black border-black rounded-md ">
                            <p className="text-[8px] sm:text-base font-medium">8</p>
                            <p className="text-[7px] sm:text-sm font-light">Days</p>
                        </div>
                        <div className="w-7 h-7 sm:w-14 sm:h-14  items-center inline-flex flex-col py-0.5  px-1 sm:px-2 border text-black border-black rounded-md ">
                            <p className="text-[8px] sm:text-base font-medium">8</p>
                            <p className="text-[7px] sm:text-sm font-light">Days</p>
                        </div>
                        <div className="w-7 h-7 sm:w-14 sm:h-14 items-center inline-flex flex-col py-0.5   px-1 sm:px-2 border text-black border-black rounded-md ">
                            <p className="text-[8px] sm:text-base font-medium">8</p>
                            <p className="text-[7px] sm:text-sm font-light">Days</p>
                        </div>
                    </div>
                    <p className="text-xs sm:text-xl text-black font-medium mb-0.5 sm:mb-2">It feels good to be the first</p>
                    <p className="text-grey-900 text-[8px] sm:text-base font-light mb-2.5 sm:mb-6">Get ready for the future of smartphones.Experience innovation like never before. Stay tuned for the big iPhone 15 pre-sale.</p>
                    <div className="text-center">
                        <Button variant="blue" size={"sm"}>
                            Register Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stock