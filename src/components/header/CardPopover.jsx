"use client";
import { cardItems as initialCardItems } from "@/consts/consts";
import Image from "next/image";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import Fon from "../Fon";

const CardPopover = () => {
    const [cardItems, setCardItems] = useState(initialCardItems);
    const [isHovered, setIsHovered] = useState(false);
    const hideTimeoutRef = useRef(null);

    const handleMouseEnter = () => {
        if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
        }
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        hideTimeoutRef.current = setTimeout(() => {
            setIsHovered(false);
        }, 50); 
    };

    const handleIncrease = (index) => {
        const newCardItems = [...cardItems];
        newCardItems[index].quantity += 1;
        setCardItems(newCardItems);
    };

    const handleDecrease = (index) => {
        const newCardItems = [...cardItems];
        if (newCardItems[index].quantity > 1) {
            newCardItems[index].quantity -= 1;
            setCardItems(newCardItems);
        }
    };

    const handleRemoveItem = (index) => {
        const newCardItems = cardItems.filter((_, i) => i !== index);
        setCardItems(newCardItems);
    };

    return (
        <>
            <div
            className="relative z-50"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button className="w-6 h-6 flex items-center justify-center">
                <img src="/assets/icon/bag.svg" alt="Bag Icon" />
            </button>
            <div className={`flex flex-col gap-4 absolute p-6 pt-8 pr-0 bg-white min-w-[512px] rounded-b-lg -right-14 top-6 transition-opacity duration-300 ${isHovered ? "opacity-100 visible z-[60]" : "opacity-0 invisible"}`}>
                <p className="pt-6 text-lg text-black font-light mb-5">{cardItems.length} items</p>
                <ul className="flex flex-col gap-3 max-h-[543px] overflow-auto pr-4">
                    {cardItems.map((item, index) => (
                        <div key={item.id} className="flex gap-4 h-[173px] rounded-lg bg-white shadow-2">
                            <div className="min-w-[154px] max-w-[154px] p-2.5 flex items-center">
                                <Image 
                                    height={120}
                                    width={154}
                                    src={item.imageSrc} 
                                    alt={item.name} 
                                />
                            </div>
                            <div className="p-4 pl-0">
                                <p className="text-base font-medium text-black">{item.name}</p>
                                <p className="card-text mb-2">{item.color} ×{item.quantity}</p>
                                <div className="flex flex-col gap-1 mb-2">
                                    <div className="flex items-center gap-1 card-text">
                                        <img src="/assets/icon/truck.svg" alt="truck" />
                                        {item.delivery}
                                    </div>
                                    <div className="flex items-center gap-1 card-text">
                                        <img src="/assets/icon/verify.svg" alt="verify" />
                                        {item.guarantee}
                                    </div>
                                </div>
                                <div className="flex items-end justify-between">
                                    <p className="text-xs text-grey-900 font-light">${(item.price * item.quantity).toFixed(2)}</p>
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => handleRemoveItem(index)}>
                                            <img src="/assets/icon/trash.svg" alt="trash" />
                                        </button>
                                        <div className="flex items-center gap-3  border-b border-b-grey-500">
                                            <button onClick={() => handleDecrease(index)}>
                                                <img className="w-4 h-4" src="/assets/icon/minus.svg" alt="minus" />
                                            </button>
                                            <span className="text-sm font-light text-grey-600">{item.quantity}</span>
                                            <button onClick={() => handleIncrease(index)}>
                                                <img className="w-4 h-4" src="/assets/icon/add.svg" alt="add" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
                <div className="pr-6 flex gap-8">
                    <div className="flex flex-col items-center">
                        <p className="text-grey-900 text-sm font-light whitespace-nowrap">Grand total</p>
                        <p className="text-base font-medium text-grey-900">$543.02</p>
                    </div>
                    <Button variant="blue" size="sm" className="gap-2 flex items-center  w-full">
                        Proceed to Cart
                        <img src="/assets/icon/shopping-cart.svg" alt="" />
                    </Button>
                </div>
            </div>
            
        </div>
        <Fon fon={isHovered}/>
        </>
    );
};

export default CardPopover;
