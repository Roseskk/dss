// ParallaxComponent.tsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ParallaxComponent: React.FC<any> = ({children}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ y: 0, transition: { duration: 1.5, ease: 'easeOut' } });
        }
    }, [controls, inView]);

    return (
        <motion.div ref={ref} initial={{ y: 100 }} animate={controls}>
            {children}
        </motion.div>
    );
};

export default ParallaxComponent;
