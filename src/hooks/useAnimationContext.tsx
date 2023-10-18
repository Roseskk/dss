import React, { createContext, useState, useContext, useCallback } from 'react';

interface AnimationContextProps {
    animationPhase: any;
    setAnimationPhase: React.Dispatch<React.SetStateAction<'initial' | 'center' | 'separate'>>;
    isAnimationStarted: boolean;
    startAnimation: () => void;
}

export const AnimationContext = createContext<AnimationContextProps | undefined>(undefined);

export const AnimationProvider: React.FC<any> = ({ children }) => {
    const [animationPhase, setAnimationPhase] = useState<'initial' | 'center' | 'separate'| any>('initial');
    const [isAnimationStarted, setIsAnimationStarted] = useState<boolean>(false);

    const startAnimation = useCallback(() => {
        setIsAnimationStarted(true);
    }, []);

    return (
        <AnimationContext.Provider value={{ animationPhase, setAnimationPhase, isAnimationStarted, startAnimation }}>
            {children}
        </AnimationContext.Provider>
    );
};

export const useAnimationContext = () => {
    const context = useContext(AnimationContext);
    if (!context) {
        throw new Error('useAnimation must be used within an AnimationProvider');
    }
    return context;
};
