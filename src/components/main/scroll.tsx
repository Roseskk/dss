import React from 'react';
import scroll from '../../images/head/scrol.svg'

const Scroll: React.FC = (props) => {
    return(
        <div className={'scroll_container'}>
            <img src={scroll} alt={'scroll'} className={'scroll'} />
        </div>
    )
}

export default Scroll;