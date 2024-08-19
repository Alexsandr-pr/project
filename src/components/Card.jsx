import { calculateDiscountedPrice } from '@/lib/utils'
import { Star } from 'lucide-react'
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
        <div className='flex flex-col p-3 md:p-4  relative rounded-lg group hover:cursor-pointer bg-white shadow-2 duration-300 transition-shadow hover:shadow-1'>
            {
                sale != 0  &&  <div className="py-1 px-1.5 opacity-100 duration-300 transition-opacity group-hover:opacity-0 text-secondary-400 font-light  z-50 text-xs  bg-secondary-100 left-0 top-2 absolute rounded-r-lg">
                                {sale}%
                            </div>
            }
            <div className="mb-3 lg:mb-4 relative flex items-center justify-center">
                <Image
                    className="absolute left-0 top-0 opacity-0 duration-300 transition-opacity group-hover:opacity-100"
                    width={24}
                    height={24}
                    alt="heart"
                    src={"/assets/icon/heart.svg"}
                />
                <Image
                    className='mb-3 lg:mb-4'
                    height={190}
                    width={256}
                    src={image}
                    alt={name}
                /> 
            </div>
            <h3 className='overflow-hidden line-clamp-2 max-h-12 text-ellipsis text-xs sm:text-sm lg:text-base mb-3 lg:mb-4 duration-300 transition-colors  group-hover:text-primary-500 text-black font-light leading-normal basis-full'>
                {name}
            </h3>
            <div className="grid grid-cols-2 items-center">
                <div className='flex flex-col'>
                    <div className={sale !== 0 ? "line-through text-grey-600 font-normal" : "text-xs  md:text-sm  lg:text-lg font-light text-left duration-300 transition-colors text-black"}>
                        ${price}
                    </div>
                    {sale !== 0  && <span className='text-xs  md:text-sm  lg:text-lg font-light text-left duration-300 transition-colors text-black '>{calculateDiscountedPrice(price, sale)}$</span>}
                </div>
                <span className='flex text-right justify-end items-center text-primary-500 text-sm md:text-base font-medium '>
                    <Star className='text-primary-500 w-4 h-4 md:w-6 md:h-6'/>
                    {rating}
                </span>
            </div>
        </div>
    )
}


export default Card