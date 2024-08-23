import { calculateDiscountedPrice } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const Card = ({
    image,
    name,
    price,
    rating,
    sale
}) => {
    return (
        <div className='flex flex-col  p-2 sm:p-3 md:p-4  relative rounded-lg group hover:cursor-pointer bg-white shadow-2 duration-300 transition-shadow hover:shadow-1'>
            {
                sale != 0  &&  <div className="py-1 px-1.5 opacity-100 duration-300 transition-opacity group-hover:opacity-0 text-secondary-400 font-light  z-50 text-xs  bg-secondary-100 left-0 top-2 absolute rounded-r-lg">
                                {sale}%
                            </div>
            }
            <div className="mb-2 md:mb-3 flex flex-col lg:mb-4 relative flex items-center justify-center">
                <Image
                    className="absolute left-0 top-0 opacity-0 duration-300 transition-opacity group-hover:opacity-100"
                    width={24}
                    height={24}
                    alt="heart"
                    src={"/assets/icon/heart.svg"}
                />
                <Image
                    className='mb-2 md:mb-3 lg:mb-4'
                    height={190}
                    width={256}
                    src={image}
                    alt={name}
                /> 
                <Image
                    className='group-hover:h-0 group-hover:opacity-0 group-hover:hidden'
                    alt="line"
                    height={2}
                    width={256}
                    src={"/assets/img/decor/random-shape-in-blue.svg"}
                />
                <Image
                    className='h-0 opacity-0 hidden group-hover:block group-hover:h-0.5 group-hover:opacity-100 '
                    alt="line"
                    height={2}
                    width={256}
                    src={"/assets/img/decor/random-shape-in-blue-hover.svg"}
                />
            </div>
            
            <h3 className='overflow-hidden line-clamp-2 max-h-12 text-ellipsis text-xs sm:text-sm lg:text-base mb-2 sm:mb-3 lg:mb-4 duration-300 transition-colors  group-hover:text-primary-500 text-black font-light leading-normal basis-full'>
                {name}
            </h3>
            <div className="grid grid-cols-2 items-end">
                <div className='flex flex-col'>
                    <div className={sale !== 0 ? "line-through md:text-sm text-grey-600 text-[10px] font-normal" : "text-xs  md:text-sm  lg:text-lg font-light text-left duration-300 transition-colors text-black"}>
                        ${price}
                    </div>
                    {sale !== 0  && <span className='text-xs  md:text-sm  lg:text-lg font-light text-left duration-300 transition-colors text-black '>{calculateDiscountedPrice(price, sale)}$</span>}
                </div>
                <div className='flex gap-0.5 text-right justify-end items-center text-primary-500 text-sm md:text-base font-medium '>
                    <Image
                        className='text-primary-500 w-3 h-3 md:w-4 md:h-4'
                            width={18}
                            height={18}
                            alt={"star"}
                            src="/assets/icon/star.svg"
                        />
                    <div className="pt-0.5">
                    {rating}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Card