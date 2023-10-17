import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const withSplitAnimation = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    return (props: P) => {
        const transition = { duration: 2, ease: "easeInOut" };

        const leftVariants = {
            hidden: { width: 0 },
            visible: { width: "50vw", transition },
            exit: { width: 0, transition }
        };

        const rightVariants = {
            hidden: { width: 0 },
            visible: { width: "50vw", transition },
            exit: { width: 0, transition }
        };

        return (
            <AnimatePresence mode={'wait'}>
                <motion.div key="left" initial="hidden" animate="visible" exit="exit" variants={leftVariants} style={{ float: 'left' }} />
                <motion.div key="right" initial="hidden" animate="visible" exit="exit" variants={rightVariants} style={{ float: 'right' }} />
                <WrappedComponent {...props} />
            </AnimatePresence>
        );
    };
};

export default withSplitAnimation