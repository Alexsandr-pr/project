"use client";

import { useState } from "react";
import { Input } from "../ui/input";


const data = [
    {
        text:"MacBook Pro "
    },
    {
        text:"JBL speaker"
    },
    {
        text:"AirPods Pro"
    },
    {
        text:"Canon"
    },
    {
        text:"Samsung S9"
    },
    {
        text:"AirPods Max"
    },
    {
        text:"Tablet"
    },
    {
        text:"Asus "
    },
    {
        text:"Xiaomi "
    },
    {
        text:"MagSafe"
    },
]
const data2 = [
    {
        text:"Tablets"
    },
    {
        text:"Laptops"
    },
    {
        text:"Headphones"
    },
    {
        text:"USB Drive"
    },
    {
        text:"Smartphones"
    },
    {
        text:"Phone Cases"
    },
    {
        text:"Smartwatch"
    }
]

const resultData = [
    {
        model:"X",
        text:"Case"
    },
    {
        model:"11",
        text:"Case"
    },
    {
        model:"11 Pro",
        text:"Case"
    },
    {
        model:"11 Promax",
        text:"Case"
    },
    {
        model:"12",
        text:"Case"
    },
    {
        model:"12 mini",
        text:"Case"
    },
    {
        model:"12 Pro",
        text:"Case"
    },
    {
        model:"12 Promax",
        text:"Case"
    },
    {
        model:"13 mini",
        text:"Case"
    },
    {
        model:"13",
        text:"Case"
    },
    {
        model:"13 Pro",
        text:"Case"
    },
    {
        model:"13 Promax",
        text:"Case"
    },
    {
        model:"SE",
        text:"Case"
    },
    {
        model:"14",
        text:"Case"
    },
    {
        model:"14 Plus",
        text:"Case"
    },
    {
        model:"14 Pro",
        text:"Case"
    },
    {
        model:"14 Promax",
        text:"Case"
    },
]

const resultCase = [
    {
        imageSrc:"/assets/img/search-cases/image1.png",
        name:"Cases & Protection"
    },
    {
        imageSrc:"/assets/img/search-cases/image2.png",
        name:"Cases & Protection"
    },
    {
        imageSrc:"/assets/img/search-cases/image3.png",
        name:"Cases & Protection"
    },
    {
        imageSrc:"/assets/img/search-cases/image4.png",
        name:"Cases & Protection"
    },
    {
        imageSrc:"/assets/img/search-cases/image5.png",
        name:"Cases & Protection"
    },
    {
        imageSrc:"/assets/img/search-cases/image6.png",
        name:"Cases & Protection"
    },
]


const SerachPopover = () => {

    const [open, setOpen] = useState(false);

    const openSearch = () => {
        setOpen(true)
    }

    const closeSearch = () => {
        setOpen(false)
    }

    return (
        <div className="relative z-50">

            <button onClick={() => openSearch()} className="w-6 h-6 flex items-center justify-center">
                <img src="/assets/icon/search-normal.svg" alt="search Icon" />
            </button>
            
            <div className={`fixed left-0 top-0 w-screen h-screen bg-black/60 z-[30] items-center justify-center ${open ? "opacity-100  visible flex" : "opacity-0 invisible hidden"}`}>
                <div className="px-12 py-8   bg-white rounded-lg">
                    <div className="flex relative items-center justify-between mb-6">
                        <Input placeholder="What can we help you to find ?" className="w-[517px] "/>
                        <button onClick={() => closeSearch()}>
                            <img src="/assets/icon/close-circle.svg" alt="close-circle" />
                        </button>
                        <p className="absolute left-0 -bottom-8 text-grey-700 text-base font-light ">view 17 out of 30 results</p>
                    </div>
                    <div className="flex gap-12 items-center">
                        <ul className="grid grid-cols-2 gap-6">
                            {
                                resultData.map(({text, model}) => {
                                    return (
                                        <li key={text} className="text-lg font-light">
                                            <span className="text-black">{model}</span>
                                            <span className="text-grey-600"> {text}</span>
                                        </li>
                                    )
                                })
                            }
                            <li className="text-base font-normal text-primar">
                                <button>
                                Tap for more
                                </button>
                            </li>
                        </ul>
                        <div className="grid grid-cols-3 gap-6">
                            {
                                resultCase.map(({name,imageSrc}) => {
                                    return (
                                        <div className="flex flex-col shadow-2 rounded-lg gap-4 p-2 bg-white">
                                            <img src={imageSrc} alt={name} />
                                            <p className="text-black text-base font-normal ">{name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* <div className="flex gap-8">
                        <div className="flex flex-col gap-10">
                            <p className="text-xl text-black font-medium">The Most Searched Items</p>
                            <ul className="grid-cols-2 grid gap-8">
                                {
                                    data.map(item => {
                                        return (
                                            <li key={item.text} className="text-lg text-black font-light">
                                                {item.text}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="flex flex-col gap-10">
                            <p className="text-xl text-black font-medium">The Most Searched Items</p>
                            <ul className="grid-cols-2 grid gap-8">
                                {
                                    data2.map(item => {
                                        return (
                                            <li key={item.text} className="text-lg text-black font-light">
                                                {item.text}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SerachPopover