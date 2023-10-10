import React, {createContext, SetStateAction, useContext, useState} from 'react';


interface IModal {
    isOpen: boolean,
    setOpen: React.Dispatch<SetStateAction<boolean>>
}

const ModalContext = createContext<IModal | null>(null)

const ModalProvider: React.FC<any> = ({children}) => {
    const [isOpen, setOpen] = useState<boolean>(false)
    return(
        <ModalContext.Provider value={{isOpen, setOpen}}>
            {children}
        </ModalContext.Provider>
    )
}
export const useModalContext = () => {
    const context = useContext(ModalContext)
    if (!context) {
        throw new Error ("Modal should be on top level")
    }
    return context
}

export default ModalProvider;