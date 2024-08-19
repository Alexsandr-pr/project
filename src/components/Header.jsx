import { HOME, navLinks } from "@/consts/consts";
import { Menu, Search, ShoppingBasket, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input"

const Header = () => {
    return (
        <header className="flex z-50 bg-white items-center justify-center gap-3 sticky w-full flex-col top-0 h-[100px] left-0 md:border-b md:border-blue">
            <div className="container mx-auto flex justify-between gap-4 items-center">
                <div className="md:hidden">
                    <Menu />
                </div>
                <Link className="hidden md:block" href={HOME}>
                    <Image 
                        width={56}
                        height={63}
                        alt="logo"
                        src={"/assets/icon/logo.png"}
                    />
                </Link>
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-x-6 lg:gap-x-12">
                        {
                            navLinks.map(({route, label}) => {
                                return (
                                    <li key={route}>
                                        <Link className="text-black hover:text-primar duration-300 transition-all relative hover:border-b hover:border-b-primar font-light text-lg text-center p-2" href={route}>
                                            
                                            {label}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                
                <Link className=" text-base text-primary-400 leading-normal font-medium md:hidden" href={HOME}>
                    Tech Heim
                </Link>
                <ul className="flex gap-2"> 
                        <li className="p-2 hidden md:block"> 
                            <Link  href={""} className="w-6 h-6 flex items-center justify-center ">
                                <Search/>
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link  href={""} className="w-6 h-6 flex items-center justify-center ">
                                <ShoppingBasket />
                            </Link>
                        </li>
                        <li className="p-2">
                            <Link href={""} className="w-6 h-6 flex items-center justify-center ">
                                <User/>
                            </Link>
                        </li>
                </ul>
            </div>
            <div className="container md:hidden">
                <Input placeholder="What can we help you to find ?"/>
            </div>

        </header>
    )
}

export default Header