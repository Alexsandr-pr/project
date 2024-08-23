'use client';

import { useState, useEffect } from 'react';

const useClientType = () => {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Возвращаем тип 'stroke' только для экранов шире 640 пикселей
    return windowWidth > 640 ? 'stroke' : undefined;
};

export default useClientType;
