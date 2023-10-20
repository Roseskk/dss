import React from 'react';
import TransformCard from "../ui/transformCard";
import {useLocation} from "react-router-dom";
import usePrice from "../../hooks/usePrice";

const PriceCategory: React.FC = () => {

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    const price = usePrice(pathnames[pathnames.length - 1])
    return(
        <section className={'section-priceCategory'}>
            <div className={'priceCategory-top'}>
                <h2>СТОИМОСТЬ</h2>
                <hr />
            </div>
            <div className={'priceCategory-list'}>
                {
                    price?.items.map(p => <TransformCard index={p.price} title={p.title} text={p.text} type={'price'} />)
                }
            </div>
        </section>
    )
}

export default PriceCategory;