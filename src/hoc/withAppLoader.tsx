import React, { useEffect, useState } from 'react';

const WithAppLoader = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const WrappedWithLoader: React.FC<P> = (props) => {
        const [loading, setLoading] = useState<boolean>(true);

        useEffect(() => {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }, []);

        return (
            <>
                {
                    loading
                        ? <div>Loading now...</div>
                        : <WrappedComponent {...props} />
                }
            </>
        );
    };

    return WrappedWithLoader;
};

export default WithAppLoader;
