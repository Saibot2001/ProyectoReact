const products = [
    {
        id: '1',
        name: ' Lapicero',
        price: 100,
        category: 'escritorio',
        img: 'pendiente',
        stock: 25,
        description: 'dfjdklfjdkfjd'
    },
    {
        id: '2',
        name: ' Saitama',
        price: 100,
        category: 'anime',
        img: 'pendiente',
        stock: 25,
        description: 'dfjdklfjdkfjd'
    },
    {
        id: '3',
        name: 'llavero',
        price: 100,
        category: 'accesorios',
        img: 'pendiente',
        stock: 25,
        description: 'dfjdklfjdkfjd'
    },
]

export const getProducts =() => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}