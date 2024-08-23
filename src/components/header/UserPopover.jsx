"use client";
import { useState, useRef } from "react";
import { userPopoverLink } from "@/consts/consts";
import Image from "next/image";
import Link from "next/link";
import Fon from "../Fon";

const UserPopover = () => {
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

    return (
        <>
            <div
                className="relative z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Link href={""} className="w-6 h-6 flex items-center justify-center">
                    <img src="/assets/icon/user.svg" alt="User Icon" />
                </Link>
                <ul
                    className={`flex flex-col gap-4 absolute p-4 pt-8 bg-white w-64 rounded-b-lg right-0 top-6 transition-opacity duration-300 ${
                        isHovered ? "opacity-100 visible z-[60]" : "opacity-0 invisible"
                    }`}
                >
                    {userPopoverLink.map(({ label, imageSrc }) => (
                        <li className="link flex items-center gap-2" key={imageSrc}>
                            <Image alt={label} width={24} height={24} src={imageSrc} />
                            {label}
                        </li>
                    ))}
                </ul>
            </div>
            <Fon fon={isHovered}/>
        </>
    );
};

export default UserPopover;
