import React, { createContext, useContext, useState, useCallback } from 'react';

interface ScrollContextProps {
    target: HTMLElement | null;
    setTarget: (element: HTMLElement | null) => void;
}

const ScrollContext = createContext<ScrollContextProps | null>(null);

const ScrollProvider: React.FC<any> = ({ children }) => {
    const [target, setTarget] = useState<HTMLElement | null>(null);

    return (
        <ScrollContext.Provider value={{ target, setTarget }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScrollContext = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error('useScrollContext must be used within a ScrollProvider');
    }
    return context;
};

export default ScrollProvider;
