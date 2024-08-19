
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const BlocksHeader = ({
    title,
    linkHref,
    children
}) => {
    return (
        <div className='py-6 flex flex-col gap-4 md:gap-8'>
            <div className="flex mb-2  md:mb-4 border-b-2 border-grey-400 justify-between items-center gap-5">
                <h2 className='text-base md:text-lg  lg:text-3xl font-medium text-black'>{title}</h2>
                <Link href={linkHref}> 
                    <Button className={"text-black"}>
                        View all
                        <img src="/assets/icon/chevron.svg" alt="chevron" />
                    </Button>
                </Link>
            </div>
            {children}
        </div>
    )
}

export default BlocksHeader