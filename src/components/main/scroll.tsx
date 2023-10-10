import React from 'react';
import { useScrollContext } from '../../hooks/useScrollContext';
import scroll from '../../images/head/scrol.svg';

const Scroll: React.FC = () => {
    const { target } = useScrollContext();

    const handleClick = () => {
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='scroll_container' onClick={handleClick}>
            <img src={scroll} alt='scroll' className='scroll' />
        </div>
    );
};

export default Scroll;