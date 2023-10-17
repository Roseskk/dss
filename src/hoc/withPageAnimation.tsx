import { motion } from "framer-motion";
import React from "react";

export const withPageAnimation = <P extends object>(WrappedComponent : React.ComponentType<P>) => {
    return (props: P) => (
        <>
            <WrappedComponent {...props} />
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1 }}
                style={{ position: "fixed", left: 0, top: 0, width: "100%", height: '100vh', background: '#B0D0FF', transformOrigin: 'bottom', zIndex: 200000 }}
            />
            <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1}}
                style={{ position: "fixed", left: 0, top: 0, width: "100%", height: '100vh', background: '#B0D0FF', transformOrigin: 'top', zIndex: 200000 }}
            />
            {/*<motion.div*/}
            {/*    initial={{ x: "100vw" }}*/}
            {/*    animate={{ x: "0vw" }}*/}
            {/*    exit={{ x: "100vw" }}*/}
            {/*    transition={{ duration: 1 }}*/}
            {/*    style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "50%", height: '100%', background: '#B0D0FF', zIndex: 200000 }}*/}
            {/*>*/}
            {/*    /!* Тут можно добавить контент для второго блока или оставить пустым *!/*/}
            {/*</motion.div>*/}
        </>
    )
}
