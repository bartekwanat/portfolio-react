import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: position.y,
                left: position.x,
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: '#2A9D8F',
                zIndex:999,

            }}
        />
    );
};

export default CustomCursor;
