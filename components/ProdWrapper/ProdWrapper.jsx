import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import styles from './ProdWrapper.module.scss';
import { useSelector } from 'react-redux';
import ProdCard from '../ProdCard/ProdCard';
import Link from 'next/link';

const ProdWrapper = ({ arr }) => {
    const { inputValue1, inputValue2 } = useSelector((state) => state.filter);
    const [resultArr, setResultArr] = useState([]);

    const checkArr = (arrToCheck) => {
        if (inputValue1 !== '' && inputValue2 !== '') {
            const newPrice = arrToCheck?.filter(
                (element) => element.price >= inputValue1 && element.price <= inputValue2,
            );
            return newPrice;
        } else {
            return arrToCheck;
        }
    };

    useEffect(() => {
        const filteredArr = checkArr(arr?.products);
        setResultArr(filteredArr);
    }, [arr, inputValue1, inputValue2]);

    return (
        <main>
            <div>
                <div className={styles.ProdWrapper}>
                    <Sidebar arr={arr} />
                    <div className={styles.cards_wrapper}>
                        {arr?.products?.length > 0 ? (
                            resultArr?.length > 0 ? (
                                resultArr?.map((item) => (
                                    <ProdCard
                                        href={`/category/${arr.parent_category.name}/${arr.name}/${item.id}`}
                                        key={item.id}
                                        image={item.image1}
                                        name={item.name}
                                        price={item.price}
                                        productId={item.id}
                                        elem={item}
                                    />
                                ))
                            ) : (
                                <p>Продукты не найдены</p>
                            )
                        ) : (
                            <p>Загрузка ...</p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProdWrapper;
