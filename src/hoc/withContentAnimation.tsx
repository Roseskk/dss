import React, {useEffect, useRef} from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";


const BlockAnimationComponent: React.FC<any> = ({children}) => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Анимация будет проигрываться только один раз
    });

    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (inView) {
            mainControls.start('visible')
            slideControls.start('visible')
        }
    }, [inView]);

    return (
        <div ref={ref} style={{position: 'relative', width: '100%', overflow: 'hidden'}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}
                }}
                initial='hidden'
                animate={mainControls}
                transition={{duration: 0.5, delay: 0.25}}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: {left: 0},
                    visible: {left: '100%'}
                }}
                initial='hidden'
                animate={slideControls}
                transition={{duration: 0.5, ease: 'easeIn'}}
                style={{
                    position: 'absolute',
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: '#B0D0FF',
                    zIndex: 99999
                }}
            >
            </motion.div>
        </div>
    )
}

export default BlockAnimationComponent