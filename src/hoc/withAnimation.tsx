import React from 'react';
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';

const withAnimation = <P extends object>(Component: React.ComponentType<P>) => {
    return (props: P) => {
        const [ref, inView] = useInView({
            triggerOnce: true, // Анимация будет проигрываться только один раз
        });

        return (
            <div ref={ref}>
                <motion.div
                    // initial={{opacity: 0.5, y: 40}}
                    // animate={{opacity: inView ? 1 : 0.5, y: inView ? 0 : 40}}
                    // transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <Component {...props} />
                </motion.div>
            </div>
        );
    }
}

export default withAnimation;