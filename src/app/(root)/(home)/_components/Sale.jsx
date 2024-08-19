"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { homeSaleSlider } from "@/consts/consts";
import { calculateDiscountedPrice } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

const Sale = () => {
    const swiperRef = useRef(null);

    return (
        <div className="rounded-lg my-6 px-6 md:pr-0 mb:pr-8 w-full py-11 pb-2 gap-5 md:gap-10  flex mb:pl-8 flex-col md:flex-row bg-primary-500">
            <div className="md:w-1/4 min-h-full flex flex-col items-center">
                <h2 className="text-2xl text-center font-medium text-white mb-2">Products On Sale</h2>
                <p className="text-xl basis-full font-light text-white">Shop Now!</p>
                <Button className="text-white md:mb-12">
                    View all
                    <ChevronRight />
                </Button>
            </div>
            <div className="md:w-3/4">
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={"auto"}
                >
                    {homeSaleSlider.map((item) => (
                        <SwiperSlide key={item.name} className="max-w-[184px] min-h-[239px] p-2 bg-white rounded-lg">
                            <div className="py-1 px-1.5 text-secondary-400 font-light z-50 text-xs bg-secondary-100 left-0 top-2 absolute rounded-r-lg">
                                {item.sale}%
                            </div>
                            <Link href={"/"} className="min-h-[224px] relative flex flex-col justify-between">
                                <div>
                                    <Image
                                        className="w-full mb-3"
                                        width={168}
                                        height={146}
                                        alt={item.name}
                                        src={item.image}
                                    />
                                    <p className="text-black font-light line-clamp-2 leading-normal text-xs mb-2">
                                        {item.name}
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 items-center">
                                    <span className="text-left text-xs line-through font-normal text-grey-600">
                                        {item.price}$
                                    </span>
                                    <span className="text-right text-black text-light text-sm">
                                        {calculateDiscountedPrice(item.price, item.sale)}$
                                    </span>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                    <div className="mt-2 md:m-2 gap-2 flex justify-end ">
                        <button onClick={() => swiperRef.current.slidePrev()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M13.9993 0.666748C6.65268 0.666748 0.666016 6.65341 0.666016 14.0001C0.666016 21.3467 6.65268 27.3334 13.9993 27.3334C21.346 27.3334 27.3327 21.3467 27.3327 14.0001C27.3327 6.65341 21.346 0.666748 13.9993 0.666748ZM16.386 18.0001C16.7727 18.3867 16.7727 19.0267 16.386 19.4134C16.186 19.6134 15.9327 19.7067 15.6793 19.7067C15.426 19.7067 15.1727 19.6134 14.9727 19.4134L10.266 14.7067C9.87935 14.3201 9.87935 13.6801 10.266 13.2934L14.9727 8.58675C15.3593 8.20008 15.9993 8.20008 16.386 8.58675C16.7727 8.97342 16.7727 9.61341 16.386 10.0001L12.386 14.0001L16.386 18.0001Z" fill="#F6F6F6"/>
                            </svg>
                        </button>
                        <button onClick={() => swiperRef.current.slideNext()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M13.9993 0.666748C6.65268 0.666748 0.666016 6.65341 0.666016 14.0001C0.666016 21.3467 6.65268 27.3334 13.9993 27.3334C21.346 27.3334 27.3327 21.3467 27.3327 14.0001C27.3327 6.65341 21.346 0.666748 13.9993 0.666748ZM17.7193 14.7067L13.0127 19.4134C12.8127 19.6134 12.5593 19.7067 12.306 19.7067C12.0527 19.7067 11.7993 19.6134 11.5993 19.4134C11.2127 19.0267 11.2127 18.3867 11.5993 18.0001L15.5993 14.0001L11.5993 10.0001C11.2127 9.61341 11.2127 8.97342 11.5993 8.58675C11.986 8.20008 12.626 8.20008 13.0127 8.58675L17.7193 13.2934C18.1193 13.6801 18.1193 14.3201 17.7193 14.7067Z" fill="#F6F6F6"/>
                            </svg>
                        </button>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Sale;
