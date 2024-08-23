"use client"
import React, { useState, useEffect } from 'react';
import BlogVertical from '../../../../components/blog/BlogVertical';
import { blogPosts } from '../../../../consts/consts';
import useClientType from "../../../../hooks/useClientType"

const Blogs = () => {
    
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const firstBlockType = windowWidth >= 640 && windowWidth < 1024 ? 'stroke' : undefined;

    const secondAndThirdBlockType = useClientType();

    return (
        <div className="flex flex-col lg:flex-row py-3 md:py-6 gap-6">
            
            <div className="w-full lg:w-[32%]">
                <BlogVertical
                    type={firstBlockType}
                    {...blogPosts[0]}
                />
            </div>

            <div className="w-full lg:w-[68%] flex flex-col gap-6">
                <BlogVertical
                    type={secondAndThirdBlockType} 
                    {...blogPosts[1]}
                />
                <BlogVertical
                    type={secondAndThirdBlockType} 
                    {...blogPosts[2]}
                />
            </div>
        </div>
    );
};

export default Blogs;
