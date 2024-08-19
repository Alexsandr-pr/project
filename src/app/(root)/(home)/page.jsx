import Category from "@/app/(root)/(home)/_components/Category";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Sale from "./_components/Sale";
import BlocksHeader from "@/components/BlocksHeader";
import CardItems from "./_components/CardItems";
import { productBestSellers, productNew } from "@/consts/consts";
import Stock from "./_components/Stock";


export default function Home() {
    return (
        <>
        <main className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-5  justify-between py-6 ">
                <div className="basis-full md:basis-2/5 flex min-h-full flex-col mb:py-2 sm:py-6 xl:py-[56px] items-start">
                    <h1 className="text-3xl sm:text-5xl xl:text-6xl text-primary-700 sm:mb-2.5  lg:mb-[50px]">Tech Heim</h1>
                    <p className="text-xl sm:text-2xl lg:text-3xl h-full mb-5 text-primary-700 font-medium leading-normal">&quot;Join the <span className="text-secondar">digital revolution</span>&quot;</p>
                    <Button className={"w-full sm:w-auto"} variant="orange" size={"lg"}>
                        Explore More
                    </Button>
                </div>
                <div className="basis-full md:basis-3/5">
                    <Image
                        alt={"image"}
                        width={728}
                        height={443}
                        src="/assets/img/main-block.png"
                    />
                </div>
            </div>
            <Category/>
            <Sale/>
            <BlocksHeader title={"New Products"} linkHref={"/"}>
                <CardItems products={productNew}/>
            </BlocksHeader>
            <Stock/>
            <BlocksHeader title={"Best Sellers"} linkHref={"/"}>
                <CardItems products={productBestSellers}/>
            </BlocksHeader>
            
        </main>
        <div className="max-w-[1332px] px-4 block mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image

                                className=" aspect-video w-full "
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                            <Image
                                className=" aspect-video w-full  h-auto "
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                                />
                            <Image
                                className=" aspect-video w-full "
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 gap-y-2 leading-[1.1] flex-wrap">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image
                                className="h-full w-full object-cover left-0 top-0"
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 leading-[1.1]">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image
                                className="h-full w-full object-cover left-0 top-0"
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 leading-[1.1]">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image
                                className="h-full w-full object-cover left-0 top-0"
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 leading-[1.1]">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image
                                className="h-full w-full object-cover left-0 top-0"
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 leading-[1.1]">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image
                                className="h-full w-full object-cover left-0 top-0"
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 leading-[1.1]">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image
                                className="h-full w-full object-cover left-0 top-0"
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 leading-[1.1]">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image
                                className="h-full w-full object-cover left-0 top-0"
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 leading-[1.1]">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image
                                className="h-full w-full object-cover left-0 top-0"
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 leading-[1.1]">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image
                                className="h-full w-full object-cover left-0 top-0"
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 leading-[1.1]">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image
                                className="h-full w-full object-cover left-0 top-0"
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 leading-[1.1]">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image
                                className="h-full w-full object-cover left-0 top-0"
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 leading-[1.1]">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image
                                className="h-full w-full object-cover left-0 top-0"
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 leading-[1.1]">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image
                                className="h-full w-full object-cover left-0 top-0"
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 leading-[1.1]">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image
                                className="h-full w-full object-cover left-0 top-0"
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 leading-[1.1]">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image
                                className="h-full w-full object-cover left-0 top-0"
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 leading-[1.1]">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image
                                className="h-full w-full object-cover left-0 top-0"
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 leading-[1.1]">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image
                                className="h-full w-full object-cover left-0 top-0"
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 leading-[1.1]">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image
                                className="h-full w-full object-cover left-0 top-0"
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 leading-[1.1]">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-linear border border-[#B4A4A4] rounded-[5px]">
                        <div className="basis-[38%] relative">
                            <Image
                                className="h-full w-full object-cover left-0 top-0"
                                width={242}
                                height={136}
                                src="/assets/image.jpg" alt=""
                            />
                        </div>
                        <div className="basis-[62%] flex flex-col gap-2 sm:gap-2.5 py-2 sm:px-[15px] px-2 sm:pr-2.5 py-2.5">
                            <h3 className="text-sm mb:text-base md:text-sm lg:text-base font-bold leading-[1.1] overflow-hidden line-clamp-2 max-h-9">Stay tuned for a sneak peek at some exciting upcoming changes that will take your...</h3>
                            <div className="flex gap-[5px]">
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm leading-[1.1]  px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    Глобальный
                                </div>
                                <div className="py-[3px] text-xs mb:text-sm md:text-xs lg:text-sm  leading-[1.1] px-2.5 bg-[#EBE3D7] rounded-[5px] inline-flex">
                                    +5
                                </div>
                            </div>
                            <div className="text-[10px] lg:text-xs flex leading-[1.1] font-normal gap-1">
                                <span>Автор:</span>
                                <img src="/assets/user.png" alt="" />
                                <span>Team Unification</span>
                            </div>
                            <div className="flex gap-6 leading-[1.1]">
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                                <div className="flex items-center gap-2 text-[#222] font-normal text-[10px] lg:text-xs">
                                    <img src="/assets/viewed.png" alt="" />
                                    16.08.2024
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
