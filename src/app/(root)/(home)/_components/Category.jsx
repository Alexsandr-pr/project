"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { homeCategorySlider } from '@/consts/consts';
import Image from 'next/image';
import Link from 'next/link';


const Category = () => {
    return (
        <div className="py-6">
            <Swiper
                
                slidesPerView={"auto"}
                breakpoints={{
                    200: {
                        spaceBetween: 16,
                    },
                    768: {
                        spaceBetween: 24, 
                    }
                    
                }}
            >
                {
                    homeCategorySlider.map(({label, image}) => {
                        return (
                            <SwiperSlide key={label} className='max-w-[184px] duration-300 transition-all hover:bg-primary-25 group rounded-lg shadow-2 bg-white w-fit py-2 px-[18px]'>
                                <Link href={"/"} className="flex flex-col  items-center">
                                    <Image
                                        className='mb-2 max-w-full'
                                        width={148}
                                        height={148}
                                        src={image} 
                                        alt={label} 
                                    />
                                    <p className='text-base font-light duration-300 transition-colors group-hover:text-primar text-grey-900'>{label}</p>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
                
            </Swiper>
        </div>
    )
}

export default Category