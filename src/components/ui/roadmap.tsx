import React from 'react';

interface IRoadmapCard {
    id: number,
    idx: string,
    title: string,
    text: string
}
interface IRoadmap {
    title: string,
    sub: string,
    items: IRoadmapCard[]
}
const Roadmap: React.FC<IRoadmap> = ({title, sub, items}) => {
    return(
        <section className={'section-roadmap'}>
            <h2>{title}<span>{sub}</span></h2>
            <ul>
                {
                    items.map(val => {
                        return(
                            <li key={val.id}>
                                <h3>{val.idx}</h3>
                                <div>
                                    <h3>{val.title}</h3>
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