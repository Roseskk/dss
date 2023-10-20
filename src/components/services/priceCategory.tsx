import React from 'react';
import TransformCard from "../ui/transformCard";

const PriceCategory: React.FC = () => {
    const price = [
        {index: '150 000', title: 'Корпоративный интернет сайт', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    ]
    return(
        <section className={'section-priceCategory'}>
            <div className={'priceCategory-top'}>
                <h2>СТОИМОСТЬ</h2>
                <hr />
            </div>
            <div className={'priceCategory-list'}>
                {
                    price.map(p => <TransformCard index={p.index} title={p.title} text={p.text} type={'price'} />)
                }
            </div>
        </section>
    )
}

export default PriceCategory;