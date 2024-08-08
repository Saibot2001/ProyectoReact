const products = [
    {
        id: '1',
        name: ' producto',
        price: 100,
        category: 'celular',
        img: 'pendiente',
        stock: 25,
        description: 'dfjdklfjdkfjd'
    },
    {
        id: '2',
        name: ' producto2',
        price: 100,
        category: 'celular',
        img: 'pendiente',
        stock: 25,
        description: 'dfjdklfjdkfjd'
    },
    {
        id: '3',
        name: ' producto3',
        price: 100,
        category: 'celular',
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