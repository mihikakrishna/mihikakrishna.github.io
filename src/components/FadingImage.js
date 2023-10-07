import React, { useEffect, useRef } from 'react';

function FadingImage({ src, alt }) {
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current) return;

            const rect = imageRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            // Check if the image is within the viewport
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                imageRef.current.style.opacity = 1;
            } else {
                imageRef.current.style.opacity = 0;
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();  // Initial check

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <img ref={imageRef} className="fade-in-out" src={src} alt={alt} />;
}

export default FadingImage;
