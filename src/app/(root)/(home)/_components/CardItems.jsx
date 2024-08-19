import Card from '@/components/Card'
import React from 'react'

const CardItems = ({products}) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6'>
            {
                products.map(item => {
                    return <Card key={item.name} {...item}/>
                })
            }
        </div>
    )
}

export default CardItems