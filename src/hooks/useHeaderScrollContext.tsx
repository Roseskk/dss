import React, {createContext, ReactNode, useContext, useRef} from "react";
import {useInView} from "react-intersection-observer";

interface IHeaderContext {
    ref: any,
    inView: boolean
}


const HeaderScrollContext = createContext< IHeaderContext | null>(null)

const HeaderScrollProvider: React.FC<any> = ({children}) => {
    const headerRef = useRef(null)
    const [ref, inView] = useInView({
        threshold: 0
    })
    return(
        <HeaderScrollContext.Provider value={{ref, inView}}>
            {children}
        </HeaderScrollContext.Provider>
    )
}

export const useHeaderScrollContext = () => {
    const context = useContext(HeaderScrollContext)
    if (!context) {
        throw new Error('HeaderContext should be in MainLayOut')
    }
    return context
}

export default HeaderScrollProvider