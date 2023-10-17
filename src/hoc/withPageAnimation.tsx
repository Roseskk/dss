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
                initial={{ scaleX: 1, opacity: 1, }}
                animate={{ scaleX: [ 1, 1, 0], opacity: [1, 1, 1] }}
                exit={{scaleX:1, opacity: 1}}
                transition={{ duration: 1 }}
                style={{ position: "fixed", left: 0, top: 0, width: "100%", height: '25vh', background: '#B0D0FF', zIndex: 200000, transformOrigin: 'left', borderTop: '1px solid black' }}
            />
            <motion.div
                initial={{ scaleX: 1, opacity: 1, }}
                animate={{ scaleX: [1, 2, 0], opacity: [1, 2, 1] }}
                exit={{scaleX:1, opacity: 1}}
                transition={{ duration: 1 }}
                style={{ position: "fixed", right: 0, top: '25vh', width: "100%", height: '25vh', background: '#B0D0FF', zIndex: 200000, transformOrigin: 'right', borderTop: '1px solid black' }}
            />
            <motion.div
                initial={{ scaleX: 1, opacity: 1, }}
                animate={{ scaleX: [1, 3, 0], opacity: [1,3,1] }}
                exit={{scaleX:1, opacity: 1}}
                transition={{ duration: 1 }}
                style={{ position: "fixed", left: 0, top: '50vh', width: "100%", height: '25vh', background: '#B0D0FF', zIndex: 200000, transformOrigin: 'left', borderTop: '1px solid black' }}
            />
            <motion.div
                initial={{ scaleX: 1, opacity: 1, }}
                animate={{ scaleX: [1, 4, 0], opacity: [1,4,1] }}
                exit={{scaleX:1, opacity: 1}}
                transition={{ duration: 1 }}
                style={{ position: "fixed", right: 0, top: '75vh', width: "100%", height: '25vh', background: '#B0D0FF', zIndex: 200000, transformOrigin: 'right', borderTop: '1px solid black' }}
            />




            {/*//WORKS VARIANT*/}
            {/*<motion.div*/}
            {/*    initial={{ x: "-100vw" }}*/}
            {/*    animate={{ x: ["0vw", "-100vw"] }}*/}
            {/*    exit={{x:"0vw"}}*/}
            {/*    transition={{ times: [1], duration: 0.5 }}*/}
            {/*    style={{ position: "fixed", left: 0, top: 0, bottom: 0, width: "50%", height: '100vh', background: '#B0D0FF', zIndex: 200000 }}*/}
            {/*/>*/}
            {/*<motion.div*/}
            {/*    initial={{ x: "100vw" }}*/}
            {/*    animate={{ x: ["0vw", "100vw"] }}*/}
            {/*    exit={{x:"0vw"}}*/}
            {/*    transition={{ times: [1], duration: 0.5 }}*/}
            {/*    style={{ position: "fixed", right: 0, top: 0, bottom: 0, width: "50%", height: '100vh', background: '#B0D0FF', zIndex: 200000 }}*/}
            {/*/>*/}




            {/*<motion.div*/}
            {/*    key="page-transition"*/}
            {/*    initial={{ opacity: 0, y: "-100%" }}*/}
            {/*    animate={{ opacity: [1,0], y: ['0%','-100%'] }}*/}
            {/*    exit={{ opacity: 0, y: "100%" }}*/}
            {/*    transition={{ times: [0.5], duration: 1 }}*/}
            {/*    style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "black", zIndex: 99999 }}*/}
            {/*>*/}
            {/*    /!* Здесь можно добавить лоадер или другой контент *!/*/}
            {/*</motion.div>*/}
        </>
    )
}
