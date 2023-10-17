import React, { createContext, useState, useContext } from 'react';

interface NavigationContextProps {
    targetPath: string | null;
    setTargetPath: React.Dispatch<React.SetStateAction<string | null>>;
}

export const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);

export const NavigationProvider: React.FC<any> = ({ children }) => {
    const [targetPath, setTargetPath] = useState<string | null>(null);

    return (
        <NavigationContext.Provider value={{ targetPath, setTargetPath }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigationContext = () => {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('useNavigationContext must be used within a NavigationProvider');
    }
    return context;
};
