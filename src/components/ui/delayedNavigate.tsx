import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DelayedNavigateProps {
    to: string;
    delay: number;
}

const DelayedNavigate: React.FC<DelayedNavigateProps> = ({ to, delay }) => {
    const navigate = useNavigate();
    const [readyToNavigate, setReadyToNavigate] = useState(false);

    useEffect(() => {
        if (readyToNavigate) {
            navigate(to);
        }
    }, [readyToNavigate, navigate, to]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setReadyToNavigate(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return null;
};

export default DelayedNavigate;
