// components/ui/SplitAnimation.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SplitAnimation: React.FC<any> = ({ children }) => {
    const [animate, setAnimate] = useState("initial");

    useEffect(() => {
        setAnimate("center");
        const timer = setTimeout(() => {
            setAnimate("separate");
        }, 4000);  // 2 seconds delay
        return () => clearTimeout(timer);
    }, []);

    const variants = {
        initial: { x: '100vw' },
        center: { x: '0px' },
        separate: { x: '100vw' },
    };

    const leftVariants = {
        initial: { x: '-100vw' },
        center: { x: '0px' },
        separate: { x: '-100vw' },
    };

    const transition = {
        type: 'spring',
        stiffness: 30,
        damping: 20,
    };

    return (
        <div style={{ position: 'relative' }}>  {/* Make sure this container is relative */}
            <motion.div
                initial="initial"
                animate={animate}
                variants={leftVariants}
                transition={transition}
                style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', background: '#B0D0FF', zIndex: 20000 }}
            />
            <motion.div
                initial="initial"
                animate={animate}
                variants={variants}
                transition={transition}
                style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: 'white', zIndex: 20000  }}
            />
            {children}
        </div>
    );
};

export default SplitAnimation;
