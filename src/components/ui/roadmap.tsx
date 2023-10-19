import React from 'react';
import useRoadmap from "../../hooks/useRoadmap";
import {useLocation} from "react-router-dom";


const Roadmap: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    const roadmap = useRoadmap(pathnames[pathnames.length - 1])
    return(
        <section className={'section-roadmap'}>
            <h2>{roadmap?.title}<span>{roadmap?.sub}</span></h2>
            <ul>
                {
                    roadmap?.items.map(val => {
                        return(
                            <li key={val.id}>
                                <h3>{val.idx}</h3>
                                <div>
                                    <h3 className={'section-roadmap-title'}>{val.title}</h3>
                                    <span>{val.text}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>

    )
}

export default Roadmap;