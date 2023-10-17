import { motion } from "framer-motion";
import React from "react";

export const withPageAnimation = <P extends object>(WrappedComponent : React.ComponentType<P>) => {
    const left = {
        initial : { translateX: '-100vw'},
        animate: {translateX: '0vw'},
        exit: {translateX: '-100vw'}
    }

    const right = {
        initial : { translateX: '100vw'},
        animate: {translateX: '0vw'},
        exit: {translateX: '100vw'}
    }

    return (props: P) => (
        <>
            <WrappedComponent {...props} />
            <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: ["0vw", "-100vw"] }}
                exit={{x:"0vw"}}
                transition={{ times: [0.5], duration: 1 }}
                style={{ position: "fixed", left: 0, top: 0, bottom: 0, width: "50%", height: '100vh', background: '#B0D0FF', zIndex: 200000 }}
            />
            <motion.div
                initial={{ x: "100vw" }}
                animate={{ x: ["0vw", "100vw"] }}
                exit={{x:"0vw"}}
                transition={{ times: [0.5], duration: 1 }}
                style={{ position: "fixed", right: 0, top: 0, bottom: 0, width: "50%", height: '100vh', background: '#B0D0FF', zIndex: 200000 }}
            />
        </>
    )
}
