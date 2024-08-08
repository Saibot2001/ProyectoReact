import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncMock'
import ItemDteail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect (() => {
        getProductsById('1')
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
},[])

    return(
        <div className='ItemDetailConstainer'>
        <ItemDteail {...product} /> 
        </div>
    )
}

export default ItemDetailContainer