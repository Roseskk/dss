import { motion, AnimatePresence } from 'framer-motion';
import React from "react";

const PageAnimationWrapper: React.FC<any> = ({ children }) => {
    return (
        <AnimatePresence mode={'wait'}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageAnimationWrapper;
