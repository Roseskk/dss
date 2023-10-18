import React, { createContext, useState, useContext } from 'react';

interface MobileMenuContextProps {
    isOpenMobile: boolean;
    setOpenMobile: React.Dispatch<React.SetStateAction<boolean>>;
}


const MobileMenuContext = createContext<MobileMenuContextProps | null>(null);

export const MobileMenuProvider: React.FC<any> = ({ children }) => {
    const [isOpenMobile, setOpenMobile] = useState(false);

    return (
        <MobileMenuContext.Provider value={{ isOpenMobile, setOpenMobile }}>
            {children}
        </MobileMenuContext.Provider>
    );
};

export const useMobileMenuContext = () => {
    const context = useContext(MobileMenuContext)
    if (!context) {
        throw new Error('err')
    }
    return context
};
