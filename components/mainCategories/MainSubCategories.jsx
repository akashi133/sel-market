import React from 'react'

import styles from './MainCategories.module.scss'
import Link from 'next/link';

const MainSubCategories = ({item}) => {
  return (
    <div className={styles.subcategories}>
      <h3>{item?.name}</h3>
        {item?.subcategories?.map((elem) => (
            <p key={elem.id}>
                <Link href={`/category/${elem.parent_category.name}/${elem.name}`}>
                    {elem.name}
                </Link>
            </p>
        ))}
    </div>
  )
}

export default MainSubCategories